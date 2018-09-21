import { mount } from '@vue/test-utils';
import ActivityCard from '@/components/ActivityCard.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';

describe('ActivityCard', () => {
  let wrapper;

  beforeEach(() => {
    Vue.use(Vuetify);
  });

  it('ActivityCard works with property', () => {
    wrapper = mount(ActivityCard, {
      propsData: {
        title: 'card title',
        imgSrc: '',
        description: '',
      },
    });
    expect(wrapper.props().title).toBe('card title');
  });

  it('renders the component properly', () => {
    wrapper = mount(ActivityCard, {
      propsData: {
        title: '',
        imgSrc: '',
        description: '',
      },
    });

    expect(wrapper).toMatchSnapshot();
  });
});
