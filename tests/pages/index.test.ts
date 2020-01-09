import "jest";
import { mount } from "vue-test-utils";

// @ts-ignore
import Index from "../../pages/index.vue";

describe('Index', () => {
  test('Is a Vue instance', () => {
    const wrapper = mount(Index);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('Renders correctly', () => {
    const wrapper = mount(Index);
    expect(wrapper.element).toMatchSnapshot();
  })
});
