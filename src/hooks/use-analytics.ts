import { useEffect } from "react"

import { track, trackScrollDepth } from "@/lib/track"

/**
 * The page-level half of the beacon: one view per load, and how far down the
 * page a visit actually gets.
 *
 * Depth is measured against named sections rather than a scroll percentage,
 * because the page is between 7,800px and 11,300px tall depending on the
 * language, so "50%" means a different place in German than in English.
 * "Reached the work" is the question worth answering.
 */
const DEPTH_SECTIONS = ["work", "grantfox", "approach", "demo", "notes", "contact"]

export function useAnalytics() {
  useEffect(() => {
    track("page_view")
    return trackScrollDepth(DEPTH_SECTIONS)
  }, [])
}
