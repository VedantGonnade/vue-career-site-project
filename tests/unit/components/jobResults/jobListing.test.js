import JobListing from "@/components/jobResults/jobListing.vue";
import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import { describe, expect } from "vitest";

describe("Job Listing", () => {
  it("renders job title", () => {
    render(JobListing, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
      props: {
        job: {
          title: "Vue developer",
        },
      },
    });

    const jobTitle = screen.getByRole("heading", {
      name: /vue developer/i,
    });

    expect(jobTitle).toBeInTheDocument();
  });
});
