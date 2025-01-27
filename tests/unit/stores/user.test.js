import { useUserStore } from "@/stores/user";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe } from "vitest";

describe("pinia store", () => {
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
  });

  it("isLoggedIn is false by default", () => {
    const userStore = useUserStore();
    expect(userStore.isLoggedIn).toBe(false);
  });

  it("logs the user in", () => {
    const userStore = useUserStore();
    userStore.login();

    expect(userStore.isLoggedIn).toBe(true);
  });
});
