import React from "react";
import { render } from "@testing-library/react";
import Component from "../components/home/Blog";

describe("<Blog />", () => {
  it("should  render site blog", () => {
    const { getByTestId } = render(<Component />);
    expect(getByTestId("blog-test")).toBeVisible();
  });
});
