import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import City from "./City";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
});

it("With no parameter I want to display an empty string", () => {
  act(() => {
    render(<City />, container);
  });
  expect(container.textContent).toBe("");
});

it("With a city parameter from json ", () => {
  const city = {
    city: "New York",
    growth_from_2000_to_2013: "4.8%",
    latitude: 40.7127837,
    longitude: -74.0059413,
    population: "8405837",
    rank: "1",
    state: "New York",
  };
  act(() => {
    render(<City city={city} />, container);
  });
  expect(container.textContent).toBe("New York");
});

it("With a city parameter from json without a city name I want to get en empty string", () => {
  const city = {
    growth_from_2000_to_2013: "4.8%",
    latitude: 40.7127837,
    longitude: -74.0059413,
    population: "8405837",
    rank: "1",
    state: "New York",
  };
  act(() => {
    render(<City city={city} />, container);
  });
  expect(container.textContent).toBe("");
});
