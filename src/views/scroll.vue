<template>
  <div class="scroll-event">
    <p>没经过任何处理的scroll事件</p>
    <button @click="reset"
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">reset</button>
    <div class="counter-box">
      <span>{{count}}</span>
    </div>
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'ScrollEvent',
  components: {},
  model: {},
  props: {},
  data() {
    return {
      count: 0
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    window.addEventListener('scroll', this.scrollHanlder)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHanlder)
  },
  methods: {
    scrollHanlder() {
      this.count++
    },
    reset() {
      this.count = 0
    }
  }
}
</script>
<style lang="scss" scoped>
.scroll-event {
  height: 300vh;
}
.counter-box {
  position: sticky;
  top: 100px;
  font-size: 50px;
}
</style>