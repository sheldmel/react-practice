import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders post if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async () => [{id: 'p1', title: "first post" }]
    });
    render(<Async />);

    const postsList = await screen.findAllByRole("listitem");
    expect(postsList).not.toHaveLength(0);
  });
});
