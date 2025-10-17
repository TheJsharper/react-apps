import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import GifsHeader from "./GifsHeader";

describe("GifsHeader", () => {
    it("should render correctly", () => {

        const { container } = render(<GifsHeader title="Sample Title" description="Sample Description" />);

        expect(container).toMatchSnapshot();
    });
    it("should display the correct title and description", () => {
        const title = "Test Title";

        const description = "Test Description";

        const { container } = render(<GifsHeader title={title} description={description} />);

        expect(container).toMatchSnapshot();

        expect(container.querySelector("h1")?.textContent).toBe(title);

        expect(container.querySelector("p")?.textContent).toBe(description);
    });

    it("should match snapshot with different props title, description", () => {
        const title = "Another Title";
        const description = "Another Description";

        const { container } = render(<GifsHeader title={title} description={description} />);

        expect(container).toMatchSnapshot();

        expect(screen.getByText(title)).toBeDefined();

        expect(screen.getByText(description)).toBeDefined();
    });

    it("should handle empty title and description", () => {
        const title = "";
        const description = "";

        const { container } = render(<GifsHeader title={title} description={description} />);
        expect(container).toMatchSnapshot();

        expect(screen.getByRole("heading")).toBeDefined();

        expect(screen.getByRole("paragraph")).toBeDefined();

        expect(screen.getByRole("heading").textContent).toBe(title);

        expect(screen.getByRole("paragraph").textContent).toBe(description);
    });

    it("should handle long title and description", () => {
        const title = "This is a very long title that should be tested for rendering properly in the GifsHeader component";
        const description = "This is a very long description that should also be tested to ensure that it renders correctly and does not break the layout of the GifsHeader component in any way.";

        const { container } = render(<GifsHeader title={title} description={description} />);

        expect(container).toMatchSnapshot();

        expect(screen.getByText(title)).toBeDefined();

        expect(screen.getByText(description)).toBeDefined();
    });

    it("should handle special characters in title and description", () => {
        const title = "Title with special characters !@#$%^&*()_+";

        const description = "Description with special characters <>?:\"{}|~`";

        const { container } = render(<GifsHeader title={title} description={description} />);

        expect(container).toMatchSnapshot();

        expect(screen.getByText(title)).toBeDefined();

        expect(screen.getByText(description)).toBeDefined();
    });

    it("should handle numeric title and description", () => {
        const title = "1234567890";

        const description = "0987654321";

        const { container } = render(<GifsHeader title={title} description={description} />);

        expect(container).toMatchSnapshot();

        expect(screen.getByText(title)).toBeDefined();

        expect(screen.getByText(description)).toBeDefined();
    });


    it("should handle title and description with selector querySelector", () => {
        const title = "Title with leading and trailing whitespace";
        const description = "Description with leading and trailing whitespace";
        const { container } = render(<GifsHeader title={title} description={description} />);

        const divElement = container.querySelector(".content-center");

        expect(divElement).toBeDefined();

        expect(screen.getByText(title)).toBeDefined();

        expect(screen.getByText(description)).toBeDefined();
    });

    it("should handle title and description with different casing", () => {
        const title = "tItLe wItH diFfErEnT cAsInG";
        const description = "dEsCrIpTiOn wItH diFfErEnT cAsInG";
        render(<GifsHeader title={title} description={description} />);

        expect(screen.getByText(title)).toBeDefined();
        expect(screen.getByText(description)).toBeDefined();
    });


    it("should handle title and description with emojis", () => {
        const title = "Title with emojis 😊🚀🎉";
        const description = "Description with emojis 👍💡🔥";
        const { container } = render(<GifsHeader title={title} description={description} />);
        expect(container).toMatchSnapshot();

        expect(screen.getByText(title)).toBeDefined();
        expect(screen.getByText(description)).toBeDefined();

    })

    it("should handle title and description with HTML tags", () => {
        const title = "Bold Title";
        const description = "Italic Description";

        const { container } = render(<GifsHeader title={title} description={description} />);

        const div = container.querySelector(".content-center");

        const h1 = container.querySelector("h1");

        const p = container.querySelector("p");

        expect(div).toBeDefined();

        expect(h1).toBeDefined();

        expect(p).toBeDefined();


        expect(h1?.innerHTML).toBe(title);

        expect(p?.innerHTML).toBe(description);
    });


});
