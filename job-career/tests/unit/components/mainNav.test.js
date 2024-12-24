import { render, screen } from "@testing-library/vue";

import mainNav from "@/components/mainNav.vue";
import { describe, expect } from "vitest";
import userEvent from "@testing-library/user-event";

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

  describe("when the user logs in", () => {
    it("not displaying the profileImage", async () => {
      render(mainNav);
      let profileImage = screen.queryByRole("img", {
        name: /user profile image/i,
      });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", { name: /sign up/i });
      await userEvent.click(loginButton);

      profileImage = screen.getByRole("img", {
        name: /user profile image/i,
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
