import { mount } from '@vue/test-utils';
import Trail from '../../src/views/Trail.vue';

describe('Trail', () => {
  it('Trail works with property!', () => {
    const wrapper = mount(Trail, {
      propsData: {
        title: 'titulo',
      },
    });
    expect(wrapper.props().title).toBe('titulo');
  });
});
