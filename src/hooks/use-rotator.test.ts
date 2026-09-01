import { act, renderHook } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { useRotator } from "@/hooks/use-rotator"

describe("useRotator", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("starts at index 0", () => {
    const { result } = renderHook(() => useRotator(5, 1000))
    expect(result.current).toBe(0)
  })

  it("advances by one on each interval tick", () => {
    const { result } = renderHook(() => useRotator(3, 1000))
    act(() => vi.advanceTimersByTime(1000))
    expect(result.current).toBe(1)
    act(() => vi.advanceTimersByTime(1000))
    expect(result.current).toBe(2)
  })

  it("wraps back to 0 after the last item", () => {
    const { result } = renderHook(() => useRotator(3, 1000))
    act(() => vi.advanceTimersByTime(3000))
    expect(result.current).toBe(0)
  })

  it("never advances while paused", () => {
    const { result } = renderHook(() => useRotator(4, 1000, true))
    act(() => vi.advanceTimersByTime(10_000))
    expect(result.current).toBe(0)
  })

  it("stops advancing once paused becomes true", () => {
    const { result, rerender } = renderHook(({ paused }) => useRotator(4, 1000, paused), {
      initialProps: { paused: false },
    })
    act(() => vi.advanceTimersByTime(1000))
    expect(result.current).toBe(1)

    rerender({ paused: true })
    act(() => vi.advanceTimersByTime(5000))
    expect(result.current).toBe(1)
  })

  it("never advances with a single item", () => {
    const { result } = renderHook(() => useRotator(1, 1000))
    act(() => vi.advanceTimersByTime(5000))
    expect(result.current).toBe(0)
  })
})
