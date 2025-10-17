import AxiosMockAdapter from "axios-mock-adapter";
import { describe, expect, test, vi } from "vitest";
import { gifsMockedData } from "../../../tests/mock/gifs.data";
import { getGifsByQuery } from "./get-gifs-by-query.action";
import { giphyApi } from "./giphy.api-";

describe("getGifsByQuery actions - mock", () => {

    const gifsMockAdapter = new AxiosMockAdapter(giphyApi);

    test("should return list of gifs - mock", async () => {
        const gifs = gifsMockAdapter.onGet("/search").reply(200, gifsMockedData);

        const response = await getGifsByQuery("leo");

        expect(response).toBeInstanceOf(Array);

        expect(gifs).toBeDefined();

        expect(response.length).toBeGreaterThan(0);


    });
    test("should return empty list of gifs - mock", async () => {
        const gifs = gifsMockAdapter.onGet("/search").reply(200, {
            data: [],
            pagination: { total_count: 0, count: 0, offset: 0 },
            meta: { status: 200, msg: "OK", response_id: "xyz" }
        });

        const response = await getGifsByQuery("nonexistent");

        expect(response).toBeInstanceOf(Array);

        expect(response.length).toBe(0);

        expect(gifs).toBeDefined();

    });


    test("should handle error - mock", async () => {
        gifsMockAdapter.onGet("/search").reply(500);
        await expect(getGifsByQuery("error")).rejects.toThrowError;
    });

    test("should return list of gifs - mock structure", async () => {
        gifsMockAdapter.onGet("/search").reply(200, gifsMockedData);

        const response = await getGifsByQuery("leo");

        expect(response).toBeInstanceOf(Array);

        expect(response.length).toBeGreaterThan(0);

        expect(response).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
            })
        ]));
    });

    test("should configure well api call - mock", async () => {

        const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {
            console.log('Mocked console.error called');
        });

        gifsMockAdapter.onGet("/search").reply(400, []);
        
        const gifs = await getGifsByQuery("test");
        
        expect(gifs.length).toBe(0);

        expect(consoleErrorSpy).toHaveBeenCalled();

        expect(consoleErrorSpy).toHaveBeenCalledWith("Error fetching gifs:", expect.anything());

    });

});