import JobListings from "@/components/jobResults/jobListings.vue";
import { render, screen } from "@testing-library/vue";
import { createTestingPinia } from "@pinia/testing";
import { RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { useJobsStore } from "@/stores/jobs";

const queryParams = params => {
  return {
    query: {
      page: "1",
      ...params,
    },
  };
};

const commonRendering = queryParams => {
  const pinia = createTestingPinia();
  return render(JobListings, {
    global: {
      plugins: [pinia],
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
    const params = queryParams({});
    commonRendering(params);
    const jobsStore = useJobsStore();
    expect(jobsStore.FETCH_JOBS).toHaveBeenCalled();
  });

  it("creates a job listing for first 10 job", async () => {
    const params = queryParams({});
    commonRendering(params);
    const jobsStore = useJobsStore();
    jobsStore.jobs = Array(15).fill({});
    const jobListings = await screen.findAllByRole("listitem");
    expect(jobListings).toHaveLength(10);
  });

  describe("when params exclude page number", () => {
    it("displays page number 1", () => {
      const params = queryParams({ page: undefined });
      commonRendering(params);
      const pageNumber = screen.getByText("Page 1");
      expect(pageNumber).toBeInTheDocument();
    });

    it("displays page number", () => {
      const params = queryParams({ page: 2 });
      commonRendering(params);
      expect(screen.getByText("Page 2")).toBeInTheDocument();
    });
  });

  describe("when the user is on first page", () => {
    it("disables the previous button", async () => {
      const params = queryParams({});
      commonRendering(params);
      const jobsStore = useJobsStore();
      jobsStore.jobs = Array(15).fill({});
      await screen.findAllByRole("listitem");
      expect(
        screen.queryByRole("link", { name: /previous/i }),
      ).not.toBeInTheDocument();
    });

    it("shows the next button", async () => {
      const params = queryParams({});
      commonRendering(params);
      const jobsStore = useJobsStore();
      jobsStore.jobs = Array(15).fill({});
      await screen.findAllByRole("listitem");
      expect(screen.queryByRole("link", { name: /next/i })).toBeInTheDocument();
    });
  });
});
