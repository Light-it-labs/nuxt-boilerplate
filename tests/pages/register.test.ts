import "jest";
import { mount } from "vue-test-utils";

// @ts-ignore
import Register from "../../pages/register.vue";

describe('Register', () => {
  test('Is a Vue instance', () => {
    const wrapper = mount(Register);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Renders correctly', () => {
    const wrapper = mount(Register);
    expect(wrapper.element).toMatchSnapshot();
  })
});
