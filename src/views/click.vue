<template>
  <div class="pt-10">
    <button class="bg-blue-500 px-4 py-1 rounded-sm active:bg-blue-600"
      @click="clickMe">click me</button>
  </div>
</template>
<script>
import { debounce } from 'lodash-es'
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'ClickTest',
  components: {},
  model: {},
  props: {},
  data() {
    return {
      // clickMe: debounce(this.clickCallback, 400)
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    clickMe() {
      debounce(this.clickCallback,400)
    },
    clickCallback() {
      console.log('you click')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>