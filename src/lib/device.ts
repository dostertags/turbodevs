/**
 * Whether this device should be asked to run the WebGL background at all.
 *
 * The previous answer was "always": the three.js chunk was fetched and
 * compiled on every visit, and a full-viewport canvas ran a five-pass
 * post-processing chain under the entire page. On the phones most likely to
 * visit, that is most of the download budget and most of the frame budget,
 * spent on decoration.
 *
 * The checks are deliberately conservative — the SVG twin is the default, and
 * the canvas is an enhancement for machines that can clearly afford it.
 */
export function canAffordWebGL(): boolean {
  if (typeof window === "undefined") return false

  // Someone who has asked for less motion is not asking for an animated 3D
  // background, whichever way they asked.
  if (document.documentElement.dataset.motion === "off") return false
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false

  // Explicitly on a metered or slow connection.
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection
  if (connection?.saveData) return false
  if (connection?.effectiveType && /2g/.test(connection.effectiveType)) return false

  // A coarse pointer at a small size is a phone; a fine pointer at a large
  // size is a laptop or desktop, which is where this was ever worth having.
  if (!window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches) return false

  // deviceMemory is Chromium-only and absent elsewhere; absent is not a no.
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory
  if (typeof memory === "number" && memory < 4) return false

  return true
}
