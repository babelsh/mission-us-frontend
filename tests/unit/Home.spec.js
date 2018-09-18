import { mount } from '@vue/test-utils';
import Home from '../../src/views/Home.vue';

describe('Home', () => {
  test('Home is a Vue instance', () => {
    const wrapper = mount(Home);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
