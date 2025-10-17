import { describe, expect, test } from "vitest";
import { giphyApi } from "./giphy.api-";
import { getGifsByQuery } from "./get-gifs-by-query.action";

describe("getGifsByQuery actions", () => {
    test("should configure well api call", () => {

        const params = giphyApi.defaults.params;
        const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
        expect(params.api_key).toBe(apiKey);
        expect(params.lang).toBe('en');
        expect(giphyApi.defaults.baseURL).toBe(import.meta.env.VITE_GIPHY_API_URL);
    });
    test("should return list of gifs", async () => {
        const gifs = await getGifsByQuery("funny");
        expect(gifs).toBeInstanceOf(Array);
        expect(gifs.length).toBeGreaterThan(0);
    });

    test("should return empty list of gifs", async () => {
        const gifs = await getGifsByQuery("asdasdasdasdasdasdasd");
        expect(gifs).toBeInstanceOf(Array);
        expect(gifs.length).toBe(0);
    });

    test("should return list of gifs", async () => {
        const gifs = await getGifsByQuery("funny");
        expect(gifs).toBeInstanceOf(Array);
        expect(gifs.length).toBeGreaterThan(0);
    });

    test("should return list of gifs", async () => {
        const gifs = await getGifsByQuery("funny");
        expect(gifs).toBeInstanceOf(Array);
        
        expect(gifs).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(String),
                    title: expect.any(String),
                    url: expect.any(String),
                    width: expect.any(Number),
                    height: expect.any(Number),
                })
            ])
        );
    });

});