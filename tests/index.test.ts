import { test, expect } from "bun:test"
import { get_canvas_for_track } from "../src"

test("Test #1", async () => {
    let a = await get_canvas_for_track("4x3vJJYSW9fZWIubv5mmww")
    expect(a.canvases[0].entityUri).toBe("spotify:track:4x3vJJYSW9fZWIubv5mmww")
})