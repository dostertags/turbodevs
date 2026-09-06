import "@testing-library/jest-dom/vitest"

// jsdom doesn't implement matchMedia — every component that checks
// prefers-reduced-motion (Cursor, ScrollProgress, Hero) needs this to exist
// to be testable at all.
if (!window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList
}

// jsdom doesn't implement IntersectionObserver either. Motion's `whileInView`
// (every Reveal on the page) and the WhatsApp button's "get out of the way of
// the section in view" logic both construct one on mount, so without this any
// test that renders a real section throws before it can assert anything.
// Nothing here fires: observed elements simply never intersect, which is the
// correct resting state for a jsdom viewport that has no layout.
class NoopIntersectionObserver implements IntersectionObserver {
  readonly root = null
  readonly rootMargin = ""
  readonly scrollMargin = ""
  readonly thresholds: readonly number[] = []
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

if (typeof globalThis.IntersectionObserver === "undefined") {
  globalThis.IntersectionObserver = NoopIntersectionObserver
  window.IntersectionObserver = NoopIntersectionObserver
}
