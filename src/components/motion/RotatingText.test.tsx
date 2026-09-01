import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { RotatingText } from "@/components/motion/RotatingText"

const ITEMS = ["government compliance", "Web3 payments", "energy infrastructure"]

describe("RotatingText", () => {
  it("renders the item at the current index", () => {
    render(<RotatingText items={ITEMS} index={1} />)
    expect(screen.getByTestId("rotating-current")).toHaveTextContent("Web3 payments")
  })

  it("falls back to the first item for an out-of-range index", () => {
    render(<RotatingText items={ITEMS} index={99} />)
    expect(screen.getByTestId("rotating-current")).toHaveTextContent("government compliance")
  })

  it("exposes every variant at once via aria-label instead of only the visible one", () => {
    render(<RotatingText items={ITEMS} index={0} />)
    const wrapper = screen.getByLabelText(ITEMS.join(" · "))
    expect(wrapper).toBeInTheDocument()
  })

  it("hides the animated text from assistive tech so it isn't re-announced on every rotation", () => {
    const { container } = render(<RotatingText items={ITEMS} index={0} />)
    const visible = screen.getByTestId("rotating-current")
    expect(visible).toHaveAttribute("aria-hidden")
    // The wrapper carries the accessible name; nothing inside should double as one.
    expect(container.querySelectorAll("[aria-label]")).toHaveLength(1)
  })

  it("mounts without throwing when reduceMotion is set", () => {
    expect(() => render(<RotatingText items={ITEMS} index={0} reduceMotion />)).not.toThrow()
  })

  // jsdom has no real animation timing, so asserting on framer-motion's
  // exact transition values isn't reliable here (both the reduced- and
  // non-reduced-motion paths settle to the same synchronous style
  // snapshot) — what IS reliably testable, and is the actual reachable bug
  // this guards against, is that content updates correctly under reduced
  // motion even when the index itself never advances (see
  // `useRotator` — under `paused`, its interval never starts).
  it("under reduced motion, reflects a new index immediately with no animation required to see it", () => {
    const { rerender } = render(<RotatingText items={ITEMS} index={0} reduceMotion />)
    expect(screen.getByTestId("rotating-current")).toHaveTextContent("government compliance")
    rerender(<RotatingText items={ITEMS} index={1} reduceMotion />)
    expect(screen.getByTestId("rotating-current")).toHaveTextContent("Web3 payments")
  })

  it("under reduced motion, a language switch that changes items at a frozen index still renders the new text", () => {
    // Mirrors the exact path Hero.tsx takes: useRotator freezes `index` at
    // 0 while reduced motion is on, but switching language still swaps
    // `items` (a different locale's `hero.headline.rotating`) underneath
    // it — the visible text must update even though `index` never moved.
    const { rerender } = render(<RotatingText items={["aaa", "bbb"]} index={0} reduceMotion />)
    expect(screen.getByTestId("rotating-current")).toHaveTextContent("aaa")
    rerender(<RotatingText items={["xxx", "yyy"]} index={0} reduceMotion />)
    expect(screen.getByTestId("rotating-current")).toHaveTextContent("xxx")
  })
})
