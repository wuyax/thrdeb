<template>
  <div class="resize-event">
    <p>没经过任何处理的resize事件</p>
    <div class="counter-box">
      <span>{{count}}</span>
    </div>
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'ResizeEvent',
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
    window.addEventListener('resize', this.scrollHanlder)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.scrollHanlder)
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
.resize-event {
  height: 100%;
}
.counter-box {
  position: sticky;
  top: 100px;
  font-size: 50px;
}
</style>