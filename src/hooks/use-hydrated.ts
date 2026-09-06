import { useEffect, useState } from "react"

/**
 * False on the first render, true once the component is mounted and running in
 * the browser.
 *
 * The rule this exists to enforce: **the resting state of the page must need
 * no JavaScript frame.** Anything that starts at `opacity: 0` and waits for an
 * animation to reveal it is invisible content held hostage to a frame that may
 * arrive late, or — as the headless captures of this site showed — never. That
 * is also the difference between markup that can be prerendered and markup
 * that renders as a blank page with the JavaScript disabled.
 *
 * So components render their finished state first, then opt into animating
 * once this returns true.
 */
export function useHydrated() {
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])
  return hydrated
}
