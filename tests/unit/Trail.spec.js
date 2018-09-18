import { mount } from '@vue/test-utils';
import Trail from '../../src/views/Trail.vue';

describe('Trail', () => {
  it('works', () => {
    const wrapper = mount(Trail, {
      propsData: {
        title: 'titulo',
      },
    });
    expect(wrapper.props().title).toBe('titulo');
  });
});
