<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input v-model.trim="msg" >
    <div>{{msg}}</div>
    <div v-on:scroll.prevent="handleScroll($event)" @touchstart="touchstart($event)" style="background-color: red; width: 400px; height: 400px; overflow: auto" @click="handleClick3">
      <div style="background-color: green; width: 200px; height: 200px" @click="handleClick1($event)"></div>
      <div style="background-color: yellow; width: 200px; height: 200px" @click.stop="handleClick2"></div>
      <div style="background-color: yellow; width: 200px; height: 200px" @click.stop="handleClick2"></div>
      <div style="background-color: yellow; width: 200px; height: 200px" @click.stop="handleClick2"></div>
      <a href="www.baidu.com" @click.prevent="handleA">aaa</a>
      <a @click="cli" href="javascript:;">鼠标左键点击后查看控制台报错。</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    handleClick1 (e) {
      e.stopPropagation()
      console.log('1')
    },
    handleClick2 () {
      console.log('2')
    },
    handleClick3 () {
      console.log('3')
    },
    handleA () {
      console.log('aaa')
    },
    handleScroll (e) {
      // for (let i = 0; i < 10000; i++) {
      //   console.log(i)
      // }
      e.preventDefault()
      console.log('handleScroll')
    },
    touchstart (e) {
      for (let i = 0; i < 10000; i++) {
        console.log(i)
      }
      console.log('touchstart')
    },
    cli (e) {
      e.preventDefault()
    }
  }
}
</script>
