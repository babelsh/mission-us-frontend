import { mount } from '@vue/test-utils';
import Login from '../../src/views/Login.vue';

describe('Login', () => {
  test('Login is a Vue instance', () => {
    const wrapper = mount(Login);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
