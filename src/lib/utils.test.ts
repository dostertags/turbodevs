import { describe, expect, it } from "vitest"

import { cn } from "@/lib/utils"

describe("cn", () => {
  it.each(["text-display", "text-h2", "text-lead"])("keeps the custom size %s next to a colour", (size) => {
    expect(cn(size, "text-ink").split(" ")).toEqual([size, "text-ink"])
  })

  it("still lets a later colour replace an earlier one", () => {
    expect(cn("text-muted", "text-ink")).toBe("text-ink")
  })
})
