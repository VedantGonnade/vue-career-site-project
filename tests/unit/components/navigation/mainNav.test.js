import { render, screen } from "@testing-library/vue";

import mainNav from "@/components/navigation/mainNav.vue";
import { describe, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useUserStore } from "@/stores/user";

describe("mainNav", () => {
  const pinia = createTestingPinia();
  const renderMainNav = () => {
    render(mainNav, {
      global: {
        plugins: [pinia],
        // stubbing out the FontAwesomeIcon and RouterLink components ( replacing the actual components with stubs)
        stubs: {
          FontAwesomeIcon: true,
          RouterLink: RouterLinkStub,
        },
        mocks: {
          $route: {
            name: "JobsResults",
          },
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
      const userStore = useUserStore();
      userStore.isLoggedIn = true;
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
