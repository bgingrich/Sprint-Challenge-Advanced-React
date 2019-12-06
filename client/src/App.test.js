import React from "react";
import { render} from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

test("Renders without crashing", () => {
  render(<App />);
});

test("Displays player list", () => {
  const {getByTestId} = render(<App />);
  getByTestId("playerList");
});

test("Displays toggle function", () => {
  const {getByTestId} = render(<App />);
  getByTestId("toggle");
});

test("Displays NavBar", () => {
  const {getByTestId} = render(<App />);
  getByTestId("navbar");
});