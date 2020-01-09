import "jest";
import { mount } from "vue-test-utils";

// @ts-ignore
import Login from "../../pages/login.vue";

describe('Login', () => {
  test('Is a Vue instance', () => {
    const wrapper = mount(Login);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Renders correctly', () => {
    const wrapper = mount(Login);
    expect(wrapper.element).toMatchSnapshot();
  })
});
