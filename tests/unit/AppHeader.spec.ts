import AppHeader from "@/components/AppHeader.vue";
import { mount, shallowMount } from "@vue/test-utils";
import { reactive } from "vue";

describe("AppHeader", () => {
  test("If user is not logged in, do not show logout button", () => {
    const wrapper = mount(AppHeader, {
      props: {
        loggedIn: false,
      },
    });
    expect(wrapper.find("button").isVisible()).toBe(false);
    expect(wrapper.find("h1").isVisible()).toBe(false)
  });
  test("If user is logged in, do show the logout button", () => {
    const loggedInState = reactive({ loggedIn: true });
    const wrapper = mount(AppHeader, {
      props: {
        loggedIn: true,
      },
    });
    expect(wrapper.find("button").isVisible()).toBe(true);
    expect(wrapper.find("h1").isVisible()).toBe(false)
  });
  test("If user clicks Logout button, do show the bye bye header", async () => {
    const loggedInState = reactive({ loggedIn: true });
    const wrapper = mount(AppHeader, {
      props: {
        loggedIn: true,
      },
    });
    await wrapper.find("button").trigger('click')
    expect(wrapper.find("h1").isVisible()).toBe(true)
  });
});
