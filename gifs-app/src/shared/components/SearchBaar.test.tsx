import { describe, expect, test, vi } from "vitest";
import SearchBar from "./SearchBar";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

describe("SearchBaar", () => {
    test("should render correctly", () => {
        // Test implementation goes here
        const { container } = render(<SearchBar onSearchSubmit={() => { }} placeholder="Search..." />);

        screen.debug();

        expect(container).toMatchSnapshot();

        expect(screen.getByRole("textbox")).toBeDefined();

        expect(screen.getByRole("button")).toBeDefined();
    });

    test("should call onSearchSubmit with the correct value after 700ms debounce with setTimeout", async () => {
        const onSearchSubmit = vi.fn();

        render(<SearchBar onSearchSubmit={onSearchSubmit} placeholder="Search..." />);

        const input = screen.getByRole("textbox");

        fireEvent.change(input, { target: { value: 'test' } });

        screen.debug();
        // await new Promise((r) => setTimeout(r, 701));
        // vi.advanceTimersByTime(700);

        await waitFor(() => {
            expect(onSearchSubmit).toHaveBeenCalled();

            // Fast-forward time by 700ms
            expect(onSearchSubmit).toHaveBeenCalledWith("test");
        }, { timeout: 20000 });
    });



    test("should call just once  with the last value (debounce) after multiple changes with setTimeout", async () => {
        const onSearchSubmit = vi.fn();
        render(<SearchBar onSearchSubmit={onSearchSubmit} placeholder="Search..." />);

        const input = screen.getByRole("textbox");
        fireEvent.change(input, { target: { value: 't' } });

        fireEvent.change(input, { target: { value: 'te' } });
        fireEvent.change(input, { target: { value: 'tes' } });
        fireEvent.change(input, { target: { value: 'test' } });
        screen.debug();
        // await new Promise((r) => setTimeout(r, 701));
        await waitFor(() => {
            expect(onSearchSubmit).toHaveBeenCalledTimes(1);
            expect(onSearchSubmit).toHaveBeenCalledWith("test");
        });
        // vi.advanceTimersByTime(700);
    });

    test("should call onSearchSubmit on form submit and clear input", async () => {
        const onSearchSubmit = vi.fn();
        render(<SearchBar onSearchSubmit={onSearchSubmit} placeholder="Search..." />);

        const input = screen.getByRole("textbox") as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'test' } });

        const button = screen.getByRole("button");
        fireEvent.click(button);

        await waitFor(() => {
            expect(onSearchSubmit).toHaveBeenCalledTimes(1);
            expect(onSearchSubmit).toHaveBeenCalledWith("test");
            expect(input.value).toBe("");
        });
    });

   test("should have  the input  correctly  placeholder", async () => {
        const placeholderText = "Search for a gif...";

        render(<SearchBar onSearchSubmit={() => { }} placeholder={placeholderText} />);
        
        screen.debug();

        const input = screen.getByPlaceholderText(placeholderText);
        
        expect(input).toBeDefined();
    });

    // Add more tests as needed
});