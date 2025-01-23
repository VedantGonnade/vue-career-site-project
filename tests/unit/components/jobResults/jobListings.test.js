import JobListings from "@/components/jobResults/jobListings.vue";
import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import axios from "axios";
import { describe, expect, it, vi } from "vitest";

vi.mock("axios");

const commonRendering = element => {
  const $route = {
    query: {
      page: "1",
    },
  };
  return render(element, {
    global: {
      mocks: {
        $route,
      },
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });
};

describe("JobListings", () => {
  it("should render job listings", () => {
    axios.get.mockResolvedValue({
      data: [],
    });
    commonRendering(JobListings);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for first 10 job", async () => {
    axios.get.mockResolvedValue({
      data: Array(15).fill({}),
    });
    commonRendering(JobListings);
    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(10);
  });
});
