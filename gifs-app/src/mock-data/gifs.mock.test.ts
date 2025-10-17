import { describe, expect, test } from "vitest";
import { mockGifs } from "./gifs.mock";

describe("gifs mock data", () => {
    test("should have 10 items", () => {
        expect(mockGifs.length).toBe(6);
    });

});
    