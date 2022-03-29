import { getAllByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World text", () => {
    render(<Greeting />);
    const text = screen.getByText("Hello World!", { exact: false });
    expect(text).toBeInTheDocument();
  });

  test('renders "its good to see you" if button is not clicked', () => {
    render(<Greeting />);
    const text = screen.getByText("it's good to see you", { exact: false });
    expect(text).toBeInTheDocument();
  });

  test('renders "changed!" if button is clicked', () => {
    render(<Greeting />);
    const btn = screen.getByRole("button");
    userEvent.click(btn);
    const text = screen.getByText("changed", { exact: false });
    expect(text).toBeInTheDocument();
  });

  test('checks if "its good to see you" is not rendered if button is clicked', () => {
    render(<Greeting />);
    const btn = screen.getByRole("button");
    userEvent.click(btn);
    const text = screen.queryByText("it's good to see you", { exact: false });
    expect(text).toBeNull();
  });
  
});
