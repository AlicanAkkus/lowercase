import Vue from 'vue'
import lowercase from '@/components/lowercase'

describe('lowercase.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(lowercase)
    const vm = new Constructor().$mount()
    vm.$data.text = "Hello World"
    expect(vm.$el.querySelector('.lowercase h1').textContent)
      .toEqual('hello world')
  })
});
