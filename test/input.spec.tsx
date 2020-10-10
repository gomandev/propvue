import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import Form from "../components/common/Form";

describe("Form Component", () => {
  it("should submit when data filled", async () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<Form onSubmit={onSubmit} />);
    const input = getByTestId("input-test");
    await act(async () => {
      await fireEvent.change(input, { target: { value: "123" } });
    });
    await act(async () => {
      fireEvent.submit(getByTestId("form-test"));
    });
    expect(onSubmit).toBeCalled();
  });
});
