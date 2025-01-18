import { render, screen } from "@testing-library/vue";

import theSubnav from "@/components/navigation/theSubnav.vue";
import { describe, expect } from "vitest";

describe("theSubnav", () => {
  const renderTheSubnav = routeName => {
    const $route = {
      name: routeName,
    };
    render(theSubnav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
        mocks: {
          $route,
        },
      },
    });
  };
  it("when user is on the job page", () => {
    renderTheSubnav("JobResults");
    const jobCount = screen.getByText(/1653/);
    expect(jobCount).toBeInTheDocument();
  });

  it("when user is not on job page", () => {
    renderTheSubnav("Home");
    const jobCount = screen.queryByText("1653");
    expect(jobCount).not.toBeInTheDocument();
  });
});
