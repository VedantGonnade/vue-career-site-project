import { render, screen } from "@testing-library/vue";

import actionButton from "@/components/actionButton.vue";
import { describe, expect } from "vitest";

describe("actionButton", () => {
  it("it displays the button text", () => {
    render(actionButton, {
      props: {
        text: "Click me",
      },
    });
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it("has one of the styles to the button", () => {
    render(actionButton, {
      props: {
        text: "Click me",
        type: "primary",
      },
    });
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toHaveClass("primary");
  });
});
