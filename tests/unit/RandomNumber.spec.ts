import RandomNumber from "@/components/RandomNumber.vue";
import { mount } from "@vue/test-utils";

describe("RandomNumber", () => {
  test("By default, randomNumber data should be 0", () => {
    const wrapper = mount(RandomNumber, {
      props: { min: 1, max: 10 },
    });
    expect(wrapper.html()).toContain("<span>0</span>");
  });
  test("If button is clicked, randomNumber should be between 1 and 10", async () => {
    const wrapper = mount(RandomNumber, {
      props: { min: 1, max: 10 },
    });
    await wrapper.find("button").trigger("click");

    const randomNumber: number = parseInt(wrapper.find("span").text());
    expect(randomNumber).toBeGreaterThanOrEqual(1);
    expect(randomNumber).toBeLessThanOrEqual(10);
  });
});
