import JobListings from "@/components/jobResults/jobListings.vue";
import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";
import axios from "axios";
import { describe, expect, it, vi } from "vitest";

vi.mock("axios");

const queryParams = params => {
  return {
    query: {
      page: "1",
      ...params,
    },
  };
};

const commonRendering = queryParams => {
  return render(JobListings, {
    global: {
      mocks: {
        $route: queryParams,
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
    const params = queryParams({});
    commonRendering(params);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for first 10 job", async () => {
    axios.get.mockResolvedValue({
      data: Array(15).fill({}),
    });
    const params = queryParams({});
    commonRendering(params);
    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(10);
  });

  describe("when params exclude page number", () => {
    it("displays page number 1", () => {
      axios.get.mockResolvedValue({
        data: [],
      });
      const params = queryParams({ page: undefined });
      commonRendering(params);
      const pageNumber = screen.getByText("Page 1");
      expect(pageNumber).toBeInTheDocument();
    });

    it("displays page number", () => {
      axios.get.mockResolvedValue({
        data: [],
      });
      const params = queryParams({ page: 2 });
      commonRendering(params);
      expect(screen.getByText("Page 2")).toBeInTheDocument();
    });
  });

  describe("when the user is on first page", () => {
    it("disables the previous button", async () => {
      axios.get.mockResolvedValue({
        data: Array(15).fill({}),
      });
      const params = queryParams({});
      commonRendering(params);
      await screen.findAllByRole("listitem");
      expect(
        screen.queryByRole("link", { name: /previous/i }),
      ).not.toBeInTheDocument();
    });

    it("shows the next button", async () => {
      axios.get.mockResolvedValue({
        data: Array(15).fill({}),
      });
      const params = queryParams({});
      commonRendering(params);
      await screen.findAllByRole("listitem");
      expect(screen.queryByRole("link", { name: /next/i })).toBeInTheDocument();
    });
  });
});
