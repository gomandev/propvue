import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import InputBtn from "../components/common/InputBtn";

describe("InputBtn Component", () => {
  it("should be click when done", async () => {
    const { getByTestId } = render(<InputBtn />);
    await act(async () => {
      fireEvent.click(getByTestId("inputbtn-test"));
    });
  });
});
