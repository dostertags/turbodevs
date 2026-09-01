import "@testing-library/jest-dom/vitest"

// jsdom doesn't implement matchMedia — every component that checks
// prefers-reduced-motion (Cursor, ScrollProgress, Hero, and now the new
// depth-layers accent) needs this to exist to be testable at all.
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
