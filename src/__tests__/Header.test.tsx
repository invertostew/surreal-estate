import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "../components/Header";

describe("Header", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the logo", () => {
    render(<Header />);

    const logo = screen.getByAltText(/surreal estate/i);

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass("header-logo__logo");
  });
});
