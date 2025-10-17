import { render, screen } from "@testing-library/react";
import { createRoot } from "react-dom/client";
import { describe, expect, test } from "vitest";
import GifsApp from "./GifsApp";
//import * as mainApp from "./main";
// import "@testing-library/jest-dom" is only needed once in your test setup file, not here
describe('main', () => {

  test('should render correctly', () => {
     const { container } = render(<main />);
        expect(container).toBeDefined();
        screen.debug();
        expect(container).toMatchSnapshot();
  });
  test("should have a root element", () => {
    const component = <GifsApp />;
    const container = document.createElement('div');
    document.body.appendChild(container);

    // ReactDOM.render(component, container);

    const root = createRoot(container);
    root.render(component);
    expect(container.firstChild).toBeDefined();
    screen.debug();

  });

});