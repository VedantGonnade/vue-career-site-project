import { render, screen } from "@testing-library/vue";

import mainNav from "@/components/mainNav.vue";
import { expect } from "vitest";

describe("mainNav", () => {
  it("it displays company name", () => {
    render(mainNav);
    const companyName = screen.getByText("Awesome website");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    render(mainNav);
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuTexts = navigationMenuItems.map(
      item => item.textContent,
    );
    expect(navigationMenuTexts).toStrictEqual([
      "Teams",
      "Locations",
      "Life at Bobo Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});
