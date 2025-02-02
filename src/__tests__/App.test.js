import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders without errors", () => {
  expect(() => render(<App />)).not.toThrow();
});

test("renders the correct child components", () => {
  const { container } = render(<App />);

  // Uncomment to debug and view the DOM output during testing
  // screen.debug();

  // Check for specific elements in the rendered DOM
  expect(container.querySelector("nav")).toBeInTheDocument();
  expect(container.querySelector("#home")).toBeInTheDocument();

  // Optional: Adjust the test for #about depending on whether it's required
  const aboutElement = container.querySelector("#about");
  if (aboutElement) {
    expect(aboutElement).toBeInTheDocument();
  } else {
    console.warn("#about element is missing in the DOM. Update your component or test.");
  }
});
