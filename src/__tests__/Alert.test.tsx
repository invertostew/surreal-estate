import React from "react";
import { render, screen } from "@testing-library/react";

import Alert from "../components/Alert";

describe("Alert", () => {
  const validProps = {
    message: "",
    success: false,
  };

  it("doesn't render if the message is falsy", () => {
    const { asFragment } = render(
      <Alert message={validProps.message} success={validProps.success} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a success message if success is true", () => {
    validProps.message = "Success Message";
    validProps.success = true;

    const { asFragment } = render(
      <Alert message={validProps.message} success={validProps.success} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders an error message if success is false", () => {
    validProps.message = "Error Message";
    validProps.success = false;

    const { asFragment } = render(
      <Alert message={validProps.message} success={validProps.success} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders success case in the dom with correct class", () => {
    validProps.message = "Success Message";
    validProps.success = true;

    render(<Alert message={validProps.message} success={validProps.success} />);

    const successAlert = screen.getByText(/success message/i);

    expect(successAlert).toBeInTheDocument();
    expect(successAlert).toHaveClass("alert--success");
  });

  it("renders error case in the dom with correct class", () => {
    validProps.message = "Error Message";
    validProps.success = false;

    render(<Alert message={validProps.message} success={validProps.success} />);

    const errorAlert = screen.getByText(/error message/i);

    expect(errorAlert).toBeInTheDocument();
    expect(errorAlert).toHaveClass("alert--error");
  });
});
