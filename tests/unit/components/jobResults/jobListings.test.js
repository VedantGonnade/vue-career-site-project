import JobListings from "@/components/jobResults/jobListings.vue";
import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import axios from "axios";
import { describe, expect, it, vi } from "vitest";

vi.mock("axios");

describe("JobListings", () => {
  it("should render job listings", () => {
    axios.get.mockResolvedValue({
      data: [],
    });
    render(JobListings);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for each job", async () => {
    axios.get.mockResolvedValue({
      data: Array(15).fill({}),
    });
    render(JobListings, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });
    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(15);
  });
});
