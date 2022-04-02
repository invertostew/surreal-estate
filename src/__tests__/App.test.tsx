import React from "react";
import { render, screen } from "@testing-library/react";

import App from "../components/App";

test("renders the h2", () => {
  render(<App />);
  const h2El = screen.getByText(/surreal estate/i);
  expect(h2El).toBeInTheDocument();
});
