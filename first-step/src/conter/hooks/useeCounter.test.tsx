import { renderHook } from "@testing-library/react";
import { act } from "react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
    test("should return default values", () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0);
        expect(typeof result.current.increment).toBe("function");
    });

    test("should increment the counter", () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    });

    test("should accept initial value", () => {
        const { result } = renderHook(() => useCounter(5));
        expect(result.current.count).toBe(5);
    });

    test("should increment from initial value", () => {
        const initialValue = 5;
        const { result } = renderHook(() => useCounter(initialValue));
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(initialValue + 1);
    });

    test("should accept step value", () => {
        const initialValue = 10;
        const stepValue = initialValue + 1;
        const { result } = renderHook(() => useCounter(initialValue));
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(stepValue);
    });

    test("should increment multiple times", () => {
        const { result } = renderHook(() => useCounter());
        const expectedCount = 3;
        act(() => {
            result.current.increment();
        });
        act(() => {
            result.current.increment();
        });
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(expectedCount);
    });


    test("should descrement the counter", () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.decrement();
        });
        expect(result.current.count).toBe(-1);
    });

    test("should reset the counter", () => {
        const { result } = renderHook(() => useCounter(5));
        act(() => {
            result.current.reset();
        });
        expect(result.current.count).toBe(0);
    });


    test("should decrement multiple times", () => {
        const { result } = renderHook(() => useCounter());
        const expectedCount = -3;
        act(() => {
            result.current.decrement();
        });
        act(() => {
            result.current.decrement();
        });
        act(() => {
            result.current.decrement();
        });
        expect(result.current.count).toBe(expectedCount);
    });

    test("should increment and decrement", () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
        act(() => {
            result.current.decrement();
        });
        expect(result.current.count).toBe(0);
        act(() => {
            result.current.decrement();
        });
        expect(result.current.count).toBe(-1);
    });
    test("should increment, decrement and reset", () => {
        const { result } = renderHook(() => useCounter(5)); 
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(6);
        act(() => {
            result.current.reset();
        });
        expect(result.current.count).toBe(0);
    });
    test("should decrement, increment and reset", () => {
        const { result } = renderHook(() => useCounter(5));
        act(() => {
            result.current.decrement();
        });
        expect(result.current.count).toBe(4);
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(5);
        act(() => {
            result.current.reset();
        });
        expect(result.current.count).toBe(0);
    }); 
});