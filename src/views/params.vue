<template>
  <div class="params">
    <p>高阶使用（参数传递）</p>
    <button @click="passParam($event)"
      class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">传参</button>
  </div>
</template>
<script>
import { debounce } from 'lodash-es'
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
const func = function(...arg) {
  console.log(arg)
}
const debounced = debounce(func, 400)
export default {
  name: 'Params',
  components: {},
  model: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    passParam(e) {
      debounced(e, '测试', '测试二')
    }
  }
}
</script>
<style lang="scss" scoped>
</style>