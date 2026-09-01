import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { DepthLayers } from "@/components/DepthLayers"

describe("DepthLayers", () => {
  it("mounts without throwing", () => {
    expect(() => render(<DepthLayers />)).not.toThrow()
  })

  it("is purely decorative: hidden from assistive tech and never keyboard-reachable", () => {
    const { container } = render(<DepthLayers />)
    const root = container.firstElementChild
    expect(root).toHaveAttribute("aria-hidden", "true")
    // No focusable descendants — a decorative accent must never appear in
    // the tab order.
    expect(container.querySelectorAll("a, button, input, [tabindex]")).toHaveLength(0)
  })

  it("renders exactly four layers", () => {
    render(<DepthLayers />)
    expect(screen.getAllByTestId("depth-layer")).toHaveLength(4)
  })

  it("animates via CSS classes only, not inline JS-driven styles", () => {
    // The whole point of building this in CSS rather than a JS rAF loop is
    // that the site's existing global `prefers-reduced-motion` rule
    // (index.css) already neutralizes plain CSS animations for free. If
    // this ever grows an inline `style` transform, that safety net stops
    // covering it.
    const { container } = render(<DepthLayers />)
    const layers = screen.getAllByTestId("depth-layer")
    for (const layer of layers) {
      expect(layer.getAttribute("style") ?? "").not.toMatch(/transform|animation/)
    }
    expect(container.firstElementChild?.className).toMatch(/\S/)
  })
})
