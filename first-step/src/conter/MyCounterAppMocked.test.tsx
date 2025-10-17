import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

const mockIncrement = vi.hoisted(() => vi.fn());
const mockDecrement = vi.hoisted(() => vi.fn());
const mockReset = vi.hoisted(() => vi.fn());

vi.mock(import("./hooks/useCounter"), () => {
    return {
        useCounter: vi.fn().mockReturnValue({
            count: 10,
            increment: mockIncrement,
            decrement: mockDecrement,
            reset: mockReset,
        }),
    };
} );

describe("MyCounterAppMocked", () => {
    test("should render correctly", () => {
        const { container } = render(<MyCounterApp />);
        
        expect(container).toBeDefined();
    }); 


    test("should show the mocked value of 10", () => {
        render(<MyCounterApp />);
        
        expect(screen.getByText("Counter: 10")).toBeDefined();
    }); 

    test("shoud increment the counter", () => {
        render(<MyCounterApp />);
        const h1 = screen.getByRole("heading", { level: 1 });
        expect(h1.innerHTML).toContain("10");

        const button = screen.getByRole("button", { name: "+1" });
        expect(button).toBeDefined();

        fireEvent.click(button);

        expect(mockIncrement).toHaveBeenCalled();
    });

    test("shoud decrement the counter", () => {
        render(<MyCounterApp />);
        const button = screen.getByRole("button", { name: "-1" });
        
        expect(button).toBeDefined();
        
        fireEvent.click(button);

        expect(mockDecrement).toHaveBeenCalled();

    });
    test("shoud reset the counter", () => {
        render(<MyCounterApp />);
        const button = screen.getByRole("button", { name: "Reset" });
        expect(button).toBeDefined();
        fireEvent.click(button);

        expect(mockReset).toHaveBeenCalled();
    });

});