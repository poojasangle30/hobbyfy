import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

test("Should render li element as Shop", () => {
  render(<Header />);
  expect(screen.getByTestId("shop")).toHaveTextContent("Shop");
});

test("Should identify class name as header", () => {
  const rendered = render(<Header />);
  const div = rendered.container.querySelector("div");
  expect(div.className).toBe("header");
});

test("Should identify navbar element as navbar", () => {
  const { container } = render(<Header />);
  const nav = container.querySelector("nav");
  expect(nav.className).toBe("navbar");
});
