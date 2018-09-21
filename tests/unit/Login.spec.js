import { shallowMount } from '@vue/test-utils';
import Login from '@/views/Login.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';

describe('Login', () => {
  let wrapper;

  beforeEach(() => {
    Vue.use(Vuetify);
  });

  test('Login is a Vue instance', () => {
    wrapper = shallowMount(Login);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('renders the component properly', () => {
    wrapper = shallowMount(Login);

    expect(wrapper).toMatchSnapshot();
  });
});
