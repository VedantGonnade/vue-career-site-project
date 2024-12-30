import { render, screen } from "@testing-library/vue";

import mainNav from "@/components/navigation/mainNav.vue";
import { describe, expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("mainNav", () => {
  const renderMainNav = () => {
    render(mainNav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    });
  };
  it("it displays company name", () => {
    renderMainNav();
    const companyName = screen.getByText("Zonal Surf");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    renderMainNav();
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
      renderMainNav();
      let profileImage = screen.queryByRole("img", {
        name: /user profile image/i,
      });
      expect(profileImage).not.toBeInTheDocument();

      const loginButton = screen.getByRole("button", { name: /sign in/i });
      await userEvent.click(loginButton);

      profileImage = screen.getByRole("img", {
        name: /user profile image/i,
      });
      expect(profileImage).toBeInTheDocument();
    });
  });
});
