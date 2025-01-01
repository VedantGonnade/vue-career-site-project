import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import textInput from "@/components/shared/textInput.vue";
import { describe, expect, it } from "vitest";

describe("textInput", () => {
  it("communicates that user has entered character", async () => {
    const { emitted } = render(textInput, {
      props: {
        modelValue: "",
      },
    });
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "abc");
    expect(emitted()).toHaveProperty("update:modelValue");
    expect(emitted()["update:modelValue"]).toHaveLength(3);
    expect(emitted()["update:modelValue"][0]).toEqual(["a"]);
    expect(emitted()["update:modelValue"][1]).toEqual(["ab"]);
    expect(emitted()["update:modelValue"][2]).toEqual(["abc"]);
  });
});
