import { render, screen } from "@testing-library/vue";

import theSubnav from "@/components/navigation/theSubnav.vue";
import { describe, expect } from "vitest";

describe("theSubnav", () => {
  const renderTheSubnav = onJobResultsPage => {
    render(theSubnav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      data() {
        return {
          onJobResultsPage,
        };
      },
    });
  };
  it("when user is on the job page", () => {
    renderTheSubnav(true);
    const jobCount = screen.getByText(/1653/);
    expect(jobCount).toBeInTheDocument();
  });

  it("when user is not on job page", () => {
    renderTheSubnav(false);
    const jobCount = screen.queryByText("1653");
    expect(jobCount).not.toBeInTheDocument();
  });
});
