import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { ItemCounter } from "./ItemCounter";

describe("ItemCounter", () => {
    // Add tests here

    test("should render component correctly", () => {
        const name = "Test Item";
        const quantity = 3;

        render(<ItemCounter name={name} quantity={quantity} />);
        screen.debug();

        expect(screen.getByText(name)).toBeDefined();

        expect(screen.getByText(quantity)).toBeDefined();
    });


    test("should render with default quantity of 0 when quantity prop is not provided", () => {
        const name = "Default Quantity Item";
        render(<ItemCounter name={name} />);

        expect(screen.getByText(name)).toBeDefined();
        
        expect(screen.getByText("0")).toBeDefined();


        screen.debug();

    });

    test("should increase quantity when +1 button is clicked", async () => {
        const name = "Increase Test Item";
        const quantity = 2;
        render(<ItemCounter name={name} quantity={quantity} />);

        const increaseButton = screen.getByText("+1");
        
        expect(increaseButton).toBeDefined();
        
        await screen.getByText("+1").click();

        expect(screen.getByText("3")).toBeDefined();
        
        screen.debug();
    });

    test("should decrease quantity when -1 button is clicked", async () => {
        const name = "Decrease Test Item";
        
        const quantity = 2;
        
        render(<ItemCounter name={name} quantity={quantity} />);

        const decreaseButton = screen.getByText("-1");

        expect(decreaseButton).toBeDefined();
        
        await screen.getByText("-1").click();

        expect(screen.getByText("1")).toBeDefined();
        
        screen.debug();
    });

    test('should increase quantity to 0 when +1 button is clicked and quantity is 1', async () => {
        const name = "Increase to Zero Test Item";
        const quantity = 1;

        render(<ItemCounter name={name} quantity={quantity} />);

        const increaseButton = screen.getAllByRole('button')[0];

        expect(increaseButton).toBeDefined();

        fireEvent.click(increaseButton);

        expect(screen.getByText("2")).toBeDefined();
        screen.debug();


    });
    test('should descrease quantity to 0 when -1 button is clicked and quantity is 1', async () => {
        const name = "Decrease to Zero Test Item";
        const quantity = 1;

        render(<ItemCounter name={name} quantity={quantity} />);

        const decreaseButton = screen.getAllByRole('button')[1];

        expect(decreaseButton).toBeDefined();

        fireEvent.click(decreaseButton);

        expect(screen.getByText("0")).toBeDefined();
        screen.debug();


    });

    test('should change text color to red when quantity is 0', () => {
        const name = "Red Text Test Item";
        const quantity = 0;
        render(<ItemCounter name={name} quantity={quantity} />);

        const textElement = screen.getByText(name);
        expect(textElement).toBeDefined();
        expect(textElement.style.color).toBe('red');
        screen.debug();
    });
    
    test('should change text color to black when quantity is greater than 0', () => {
        const name = "Black Text Test Item";
        const quantity = 2;
        render(<ItemCounter name={name} quantity={quantity} />);
        const textElement = screen.getByText(name);
        expect(textElement).toBeDefined();
        expect(textElement.style.color).toBe('inherit');
        screen.debug();
    });
});