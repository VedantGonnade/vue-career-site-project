import { render, screen } from "@testing-library/vue";

import TheHeadline from "@/components/jobSearch/theHeadline.vue";
import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { nextTick } from "vue";

describe("TheHeadline", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders the headline", () => {
    render(TheHeadline);

    const actionPhrase = screen.getByRole("heading", {
      name: /build for everyone/i,
    });
    expect(actionPhrase).toBeInTheDocument();
  });

  it("change action verb at a consistent interval", () => {
    // Mock the setInterval function
    const mock = vi.fn();
    vi.stubGlobal("setInterval", mock);

    render(TheHeadline);

    expect(mock).toHaveBeenCalled();
  });

  it("change action verb after one interval", async () => {
    render(TheHeadline);
    vi.advanceTimersToNextTimer();
    await nextTick();

    const actionPhrase = screen.getByRole("heading", {
      name: /create for everyone/i,
    });
    expect(actionPhrase).toBeInTheDocument();
  });

  it("change action verb after two interval", async () => {
    render(TheHeadline);

    vi.advanceTimersToNextTimer();
    await nextTick();
    vi.advanceTimersToNextTimer();
    await nextTick();

    const actionPhrase = screen.getByRole("heading", {
      name: /design for everyone/i,
    });
    expect(actionPhrase).toBeInTheDocument();
  });

  it("removes interval when component disappaers", () => {
    // Mock the clearInterval function
    const mock = vi.fn();
    vi.stubGlobal("clearInterval", mock);

    const { unmount } = render(TheHeadline);

    unmount();
    expect(mock).toHaveBeenCalled();
    vi.unstubAllGlobals();
  });
});
