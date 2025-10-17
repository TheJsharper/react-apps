import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { useGif } from "./useGif";

describe("useGifs", () => {

    beforeEach(() => {
        vi.clearAllMocks();
        vi.resetAllMocks
    });

    test("should return  default values and methods", () => {
        const { result } = renderHook(() => useGif());

        expect(result.current.gifs.length).toBe(0);

        expect(result.current.gifs).toEqual([]);

        expect(result.current.previousSearches).toEqual([]);

        expect(typeof result.current.handleSearchClick).toBe("function");

        expect(typeof result.current.handleSearchSubmit).toBe("function");
    });

    test("should return an array of gifs when handleSearchSubmit is called", async () => {
        const { result } = renderHook(() => useGif());
        await act(async () => {

            await result.current.handleSearchSubmit("cats");
        });
        expect(result.current.gifs.length).toBe(10);
    });

    test("should return an array of gifs from cache if available", async () => {
        const { result } = renderHook(() => useGif());
        await act(async () => {
            await result.current.handleSearchSubmit("cats");
        });
        expect(result.current.gifs.length).toBe(10);

        //vi.spyOn(getGifsByQuery, "getGifsByQuery").mockRejectedValue(new Error("Should not be called"));

        await act(async () => {
            await result.current.handleSearchClick("cats");
        });
        expect(result.current.gifs.length).toBe(10);
    });

    test("should return no more than 8 previous searches", async () => {

        const { result } = renderHook(() => useGif());

        const searches = ["cats", "dogs", "birds", "fish", "lizards", "hamsters", "rabbits", "turtles"];

        await act(async () => {

            await result.current.handleSearchSubmit(searches[0]);

        });
        await act(async () => {

            await result.current.handleSearchSubmit(searches[1]);

        });
        await act(async () => {
            await result.current.handleSearchSubmit(searches[2]);


        });
        await act(async () => {

            await result.current.handleSearchSubmit(searches[3]);

        });
        await act(async () => {
            await result.current.handleSearchSubmit(searches[4]);

        });
        await act(async () => {

            await result.current.handleSearchSubmit(searches[5]);

        });
        await act(async () => {

            await result.current.handleSearchSubmit(searches[6]);

        });
        await act(async () => {

            await result.current.handleSearchSubmit(searches[7]);

        });


        //console.log("?=================>",result.current.gifsCache.current);
        expect(result.current.previousSearches.length).toBe(8);
        // expect(result.current.previousSearches).toEqual(["snakes", "turtles", "rabbits", "hamsters", "lizards", "fish", "birds", "dogs"]);
    });

   
});





