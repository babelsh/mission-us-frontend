import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    Vue.use(Vuetify);
  });

  test('Home is a Vue instance', () => {
    wrapper = mount(Home);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('renders the component properly', () => {
    wrapper = mount(Home);

    expect(wrapper).toMatchSnapshot();
  });
});
