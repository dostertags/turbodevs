import { describe, expect, it } from "vitest"

import css from "@/index.css?raw"

/**
 * Contrast is the one design decision that is objectively pass/fail, so it is
 * checked rather than eyeballed. The palette lives in `@theme` in index.css;
 * this reads the tokens straight out of that file so a colour cannot be
 * adjusted "just a little" without the consequence showing up in CI.
 *
 * Thresholds come from WCAG 2.2: 4.5:1 for body text, 3:1 for the boundary of
 * a control a user has to find (1.4.11 Non-text Contrast).
 */

function token(name: string): string {
  const match = css.match(new RegExp(`--color-${name}:\\s*(#[0-9a-fA-F]{3,8})`))
  if (!match) throw new Error(`token --color-${name} not found in index.css`)
  return match[1]
}

/** Relative luminance per WCAG 2.x, from an #rrggbb string. */
function luminance(hex: string): number {
  const n = hex.replace("#", "")
  const channels = [n.slice(0, 2), n.slice(2, 4), n.slice(4, 6)].map((pair) => {
    const c = Number.parseInt(pair, 16) / 255
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
}

function contrast(a: string, b: string): number {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

const round = (n: number) => Math.round(n * 100) / 100

describe("palette contrast", () => {
  const cases: { name: string; fg: string; bg: string; min: number }[] = [
    { name: "body text on the page", fg: "ink", bg: "bg", min: 4.5 },
    { name: "muted text on the page", fg: "muted", bg: "bg", min: 4.5 },
    { name: "muted text on a card", fg: "muted", bg: "surface", min: 4.5 },
    { name: "muted text on the deeper surface", fg: "muted", bg: "surface-2", min: 4.5 },
    { name: "accent labels on the page", fg: "accent", bg: "bg", min: 4.5 },
    { name: "accent labels on a card", fg: "accent", bg: "surface", min: 4.5 },
    { name: "the form's error text", fg: "danger", bg: "surface", min: 4.5 },
    // The primary button is ink with a paper label, in both states.
    { name: "button label on the primary fill", fg: "bg", bg: "ink", min: 4.5 },
    { name: "button label on the primary hover fill", fg: "bg", bg: "ink-hover", min: 4.5 },
    { name: "secondary button label", fg: "ink", bg: "surface-2", min: 4.5 },
    // Dark bands and the video hero's darkest overlay stop.
    { name: "paper text on an ink band", fg: "bg", bg: "ink", min: 4.5 },
    { name: "light accent figures on an ink band", fg: "accent-light", bg: "ink", min: 4.5 },
    // Inactive service-stage titles (large text, 3:1 minimum).
    { name: "dimmed large stage titles on the page", fg: "border-strong", bg: "bg", min: 3 },
    // 1.4.11: the visible boundary of a form field.
    { name: "form field border on a card", fg: "border-strong", bg: "surface", min: 3 },
    { name: "form field border on the page", fg: "border-strong", bg: "bg", min: 3 },
  ]

  it.each(cases)("$name clears $min:1", ({ fg, bg, min }) => {
    const ratio = contrast(token(fg), token(bg))
    expect(round(ratio), `--color-${fg} on --color-${bg} is ${round(ratio)}:1`).toBeGreaterThanOrEqual(min)
  })

  it("the decorative hairline is deliberately NOT used as an interactive boundary", () => {
    expect(contrast(token("border"), token("surface"))).toBeLessThan(3)
  })
})
