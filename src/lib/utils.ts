import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// The type scale in index.css (`text-display`, `text-h2`, `text-lead`) is
// custom. Without registering it, tailwind-merge reads `text-h2` as a colour
// and drops it whenever a real colour such as `text-ink` follows.
const twMerge = extendTailwindMerge({
  extend: { theme: { text: ["display", "h2", "lead"] } },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
