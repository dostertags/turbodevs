import { describe, expect, it } from "vitest"

import { SECTOR_WORK_MAP, WORK } from "@/content/site"

describe("SECTOR_WORK_MAP", () => {
  const workSlugs = new Set(WORK.map((w) => w.slug))

  it("references only slugs that exist in WORK", () => {
    for (const [sector, slugs] of Object.entries(SECTOR_WORK_MAP)) {
      for (const slug of slugs) {
        expect(workSlugs.has(slug), `sector "${sector}" references unknown WORK slug "${slug}"`).toBe(true)
      }
    }
  })

  it("has no duplicate slugs within a single sector", () => {
    for (const [sector, slugs] of Object.entries(SECTOR_WORK_MAP)) {
      expect(new Set(slugs).size, `sector "${sector}" has duplicate slugs`).toBe(slugs.length)
    }
  })

  it("covers every sector key with an array (possibly empty)", () => {
    const keys: (keyof typeof SECTOR_WORK_MAP)[] = ["government", "web3", "energy", "consumerSaas", "hospitality"]
    for (const key of keys) {
      expect(Array.isArray(SECTOR_WORK_MAP[key])).toBe(true)
    }
  })
})
