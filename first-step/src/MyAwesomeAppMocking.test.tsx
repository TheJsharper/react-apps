import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import MyAwesomeApp from "./MyAwesomeApp";


const mockItemCounter = vi.fn((_props: any) => <div data-testid="item-counter">Mocked ItemCounter</div>);

vi.mock("./shopping-cart/ItemCounter", () => {
    return {
        ItemCounter: (props: any) => mockItemCounter(props)
    };
});

describe("MyAwesomeAppMocking", () => {


    afterEach(() => {
        vi.clearAllMocks();
    });
    // Add tests here

    test("should match snapshot", () => {
        const { container } = render(<MyAwesomeApp />);
        
        screen.debug();
        expect(container).toBeDefined
    });

    test("should render the component", () => {
        render(<MyAwesomeApp />);
       const ItemCounters = screen.getAllByTestId("item-counter");

       expect(ItemCounters).toBeDefined();
       
       expect(ItemCounters.length).toBe(4);
        screen.debug();
    });

    test("should call ItemCounter with correct props", () => {
        render(<MyAwesomeApp />);
        expect(mockItemCounter).toHaveBeenCalled();
        expect(mockItemCounter).toHaveBeenCalledTimes(4);
        expect(mockItemCounter).toHaveBeenCalledWith({ name: "Nintendo Switch 2", quantity: 2 });
        expect(mockItemCounter).toHaveBeenCalledWith({ name: "PlayStation 5", quantity: 1 });
        expect(mockItemCounter).toHaveBeenCalledWith({ name: "Xbox Series X", quantity: 3 });
        expect(mockItemCounter).toHaveBeenCalledWith({ name: "Steam Deck", quantity: 5 });
        screen.debug();
    });

});
