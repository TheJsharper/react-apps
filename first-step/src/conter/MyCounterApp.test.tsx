import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe("MyCounterApp Testing", () => {
    test("  should render correctly", () => {
        const { container } = render(<MyCounterApp />);
        expect(container).toBeDefined();
    });

    test("  should match snapshot", () => {
        const { container } = render(<MyCounterApp />);
        expect(container).toMatchSnapshot();
    });

    test("  should have buttons", () => {
        render(<MyCounterApp />);

        expect(screen.getByRole("button", { name: "-1" })).toBeDefined();

        expect(screen.getByRole("button", { name: "Reset" })).toBeDefined();

        expect(screen.getByRole("button", { name: "+1" })).toBeDefined();
    });

    test("  should show the initial value of 5", () => {
        render(<MyCounterApp />);
        expect(screen.getByText("Counter: 5")).toBeDefined();
    });

    test("  should increment the counter", async () => {
        render(<MyCounterApp />);
        const button = screen.getByRole("button", { name: "+1" });

        await fireEvent.click(button);

        expect(screen.getByText("Counter: 6")).toBeDefined();
    });

    test("  should decrement the counter", async () => {
        render(<MyCounterApp />);
        const button = screen.getByRole("button", { name: "-1" });

        await fireEvent.click(button);

        expect(screen.getByText("Counter: 4")).toBeDefined();
    });

    test("  should reset the counter", async () => {
        render(<MyCounterApp />);
        const button = screen.getByRole("button", { name: "Reset" });

        await fireEvent.click(button);

        expect(screen.getByText("Counter: 0")).toBeDefined();
    });

    test("  should decrement and reset the counter", async () => {
        render(<MyCounterApp />);
        
        const buttonDecrement = screen.getByRole("button", { name: "-1" });
        
        const buttonReset = screen.getByRole("button", { name: "Reset" });

        await fireEvent.click(buttonDecrement);

        expect(screen.getByText("Counter: 4")).toBeDefined();


        await fireEvent.click(buttonReset);

        expect(screen.getByText("Counter: 0")).toBeDefined();
    });

    test("  should increment and reset the counter", async () => {
        render(<MyCounterApp />);

        const buttonIncrement = screen.getByRole("button", { name: "+1" });
        
        const buttonReset = screen.getByRole("button", { name: "Reset" });


        await fireEvent.click(buttonIncrement);

        expect(screen.getByText("Counter: 6")).toBeDefined();

        await fireEvent.click(buttonReset);

        expect(screen.getByText("Counter: 0")).toBeDefined();
    });

    test("  should increment, decrement and reset the counter", async () => {
        
        render(<MyCounterApp />);
        
        const buttonIncrement = screen.getByRole("button", { name: "+1" });
        
        const buttonDecrement = screen.getByRole("button", { name: "-1" });
        
        const buttonReset = screen.getByRole("button", { name: "Reset" });

        await fireEvent.click(buttonIncrement);
        expect(screen.getByText("Counter: 6")).toBeDefined();

        await fireEvent.click(buttonDecrement);
        expect(screen.getByText("Counter: 5")).toBeDefined();

        await fireEvent.click(buttonReset);
        expect(screen.getByText("Counter: 0")).toBeDefined();
        });

    });