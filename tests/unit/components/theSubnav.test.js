import { render, screen } from "@testing-library/vue";

import theSubnav from "@/components/theSubnav.vue";
import { describe, expect } from "vitest";

describe("theSubnav", () => {
  it("when user is on the job page", () => {
    render(theSubnav);
    const jobCount = screen.getByText("1653");
    expect(jobCount).toBeInTheDocument();
  });

  it("when user is not on job page", () => {
    render(theSubnav, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      data() {
        return {
          onJobResultsPage: false,
        };
      },
    });
    const jobCount = screen.queryByText("1653");
    expect(jobCount).not.toBeInTheDocument();
  });
});
