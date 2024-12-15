import { render, screen } from "@testing-library/vue";

import mainNav from "@/components/mainNav.vue";
import { describe, expect } from "vitest";

describe("mainNav", () => {
  it("it displays company name", () => {
    render(mainNav);
    const companyName = screen.getByText("Awesome website");
    expect(companyName).toBeInTheDocument();
  });
});
