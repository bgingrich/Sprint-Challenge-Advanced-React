import React from "react";
import ReactDOM from 'react-dom';
import * as rtl from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

afterEach(rtl.cleanup);

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
})

test('Render Toggle', () => {
    const wrapper = rtl.render(<App />)
    const element = wrapper.getByTestId("toggle")
    expect(element).toBeInTheDocument()
});

test('Render NavBar', () => {
  const wrapper = rtl.render(<App />)
  const element = wrapper.getByTestId("navbar")
  expect(element).toBeInTheDocument()
});