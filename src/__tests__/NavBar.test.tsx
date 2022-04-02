import React from "react";
import { render, screen } from "@testing-library/react";

import NavBar from "../components/NavBar";

describe("NavBar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<NavBar />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the navbar links", () => {
    render(<NavBar />);

    const viewPropertiesLink = screen.getByText(/view properties/i);
    const addPropertyLink = screen.getByText(/add a property/i);

    expect(viewPropertiesLink).toBeInTheDocument();
    expect(addPropertyLink).toBeInTheDocument();
  });
});
