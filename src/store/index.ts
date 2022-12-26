import { defineStore } from 'pinia'
/*
 * 传入2个参数，定义仓库并导出
 * 第一个参数唯一不可重复，字符串类型，作为仓库ID以区分仓库
 * 第二个参数，以对象形式配置仓库的state、getters、actions
 * 配置 state getters actions
 */
export const mainStore = defineStore('main', {
  /*
   * 类似于组件的data数据，用来存储全局状态的
   * 1、必须是箭头函数
   */
  state: () => {
    return {
      msg: 'hello world!',
      counter: 0
    }
  },
  /*
   * 类似于组件的计算属性computed的get方法，有缓存的功能
   * 不同的是，这里的getters是一个函数，不是一个对象
   */
  getters: {
    count10(state) {
      console.log('count10被调用了')
      return state.counter + 10
    }
  },
  /*
   * 类似于组件的methods的方法，用来操作state的
   * 封装处理数据的函数（业务逻辑)：初始化数据、修改数据
   */
  actions: {
    updateCounter(value: number) {
      console.log('updateCounter被调用了')
      this.counter = value * 1000
    }
  }
})
