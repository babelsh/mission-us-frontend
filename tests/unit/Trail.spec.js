import { mount } from '@vue/test-utils';
import Trail from '@/components/Trail.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';

describe('Trail', () => {
  let wrapper;

  beforeEach(() => {
    Vue.use(Vuetify);
  });

  it('Trail works with property!', () => {
    wrapper = mount(Trail, {
      propsData: {
        title: 'titulo',
      },
    });
    expect(wrapper.props().title).toBe('titulo');
  });

  it('renders the component properly', () => {
    wrapper = mount(Trail, {
      propsData: {
        title: '',
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
