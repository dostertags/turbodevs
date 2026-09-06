#!/usr/bin/env node
/**
 * A ratchet on what the browser has to download, run after `npm run build`.
 *
 * The budgets below are set just above what the site ships TODAY, so this
 * fails on a regression rather than pretending the current numbers are good.
 * They are not the target — the target is in the second table, and each phase
 * of the overhaul lowers a budget toward it. Lowering a budget is the point;
 * raising one should require saying why in the pull request.
 */
import { gzipSync } from "node:zlib"
import { readFileSync, readdirSync, statSync } from "node:fs"
import { join } from "node:path"

const DIST = "dist/assets"
const KB = 1024

/** budget in KB of *transferred* (gzip) bytes, except fonts which ship compressed already */
const BUDGETS = [
  {
    name: "entry chunk (react, motion, lenis, all 7 locales)",
    match: (f) => /^index-.*\.js$/.test(f),
    maxGzipKB: 205,
    target: "120KB — after locale dictionaries are loaded per page (Phase 5)",
  },
  {
    // three, drei and postprocessing were removed from the project entirely;
    // the background is inline SVG now. Nothing should match this again.
    name: "3D chunk (removed — must stay removed)",
    match: (f) => /^(Scene|useDotTexture)-.*\.js$/.test(f),
    maxGzipKB: 0,
    target: "0KB — the dependency is gone",
  },
  {
    name: "stylesheet",
    match: (f) => f.endsWith(".css"),
    maxGzipKB: 10,
    target: "10KB",
  },
]

/**
 * On-disk total across every font file, which is not what one visitor
 * downloads (a latin reader fetches ~70KB of woff2 — the rest are cyrillic,
 * cyrillic-ext, latin-ext and vietnamese subsets, plus a duplicate woff copy
 * of each for browsers that have not needed one in years). It is still worth
 * budgeting, because that sprawl is 30 files shipped for two small usages of
 * one monospace face, and the count is the thing Phase 5 cuts.
 */
const FONT_BUDGET_KB = 345
const FONT_COUNT_BUDGET = 33
const FONT_TARGET = "45KB in ≤4 files — one preloaded latin face, mono trimmed to latin (Phase 5)"

const files = readdirSync(DIST)
const sizeOf = (f) => statSync(join(DIST, f)).size
const gzipOf = (f) => gzipSync(readFileSync(join(DIST, f))).length

let failed = false
const row = (label, actual, budget, unit = "KB gz") => {
  const ok = actual <= budget
  if (!ok) failed = true
  console.log(
    `${ok ? "  ok  " : "  FAIL"} ${label.padEnd(52)} ${actual.toFixed(1).padStart(7)} / ${String(budget).padStart(5)} ${unit}`,
  )
}

console.log("\nTransfer budget (gzip):\n")
for (const budget of BUDGETS) {
  const matched = files.filter(budget.match)
  if (matched.length === 0) {
    console.log(`  ----  ${budget.name.padEnd(52)}     not present`)
    continue
  }
  const total = matched.reduce((sum, f) => sum + gzipOf(f), 0) / KB
  row(budget.name, total, budget.maxGzipKB)
}

const fonts = files.filter((f) => /\.(woff2?|ttf|otf)$/.test(f))
row("font payload on disk", fonts.reduce((sum, f) => sum + sizeOf(f), 0) / KB, FONT_BUDGET_KB, "KB   ")
row("font file count", fonts.length, FONT_COUNT_BUDGET, "files")

console.log("\nWhere these are going:")
for (const b of BUDGETS) console.log(`  · ${b.name}: ${b.target}`)
console.log(`  · fonts: ${FONT_TARGET}`)

if (failed) {
  console.error("\nA bundle grew past its budget. Either make it smaller, or raise the")
  console.error("budget in scripts/size-check.mjs and say why in the pull request.\n")
  process.exit(1)
}
console.log("\nAll bundles within budget.\n")
