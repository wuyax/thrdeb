<template>
  <div class="pt-10">
    <button class="bg-blue-500 px-4 py-1 rounded-sm active:bg-blue-600"
      @click="clickMe">click me native</button>
    <button class="bg-blue-500 px-4 py-1 rounded-sm active:bg-blue-600 ml-10"
      v-pfc='clickMe'>click me debounced</button>
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: '',
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
    clickMe() {
      this.mockData()
        .then(() => {
          console.log('done')
        })
        .catch(() => {
          console.log('error')
        })
    },
    mockData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let num = Math.random() * 10 - 5
          if (num > 0) {
            resolve()
          } else {
            reject()
          }
        }, 300)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>