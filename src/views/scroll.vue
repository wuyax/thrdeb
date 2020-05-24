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
  -webkit-mask-image: linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0) 1.09718%, rgba(0, 0, 0, 0) 1.09718%), linear-gradient(to right, rgba(0, 0, 0, 0) 98.9028%, rgb(0, 0, 0) 98.9028%, rgb(0, 0, 0)), linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0) 10.7383%, rgba(0, 0, 0, 0) 10.7383%), linear-gradient(rgba(0, 0, 0, 0) 89.2617%, rgb(0, 0, 0) 89.2617%, rgb(0, 0, 0)), url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKIHdpZHRoPSI2MjhweCIgaGVpZ2h0PSIzNTVweCIgdmlld0JveD0iMCAwIDMyMC4wMDAwMDAgMTgwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwxODAuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjMDAwMDAwIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNMCAxMzY5IGwwIC00MzIgNTMgNyBjMjggMyA3OCA2IDEwOSA2IDkwIDAgMTA4IDMzIDY3IDEyNSAtMjggNjMgLTIxIDEyOSAyMAoxOTQgMzggNTkgNjIgODAgMTM3IDExOCAxNTMgNzkgMjIyIDg5IDM0MiA0OCA5MSAtMzEgMTM3IC02NyAxNTkgLTEyNSA5IC0yNQoyNCAtNTYgMzIgLTcwIDEyIC0xOSAxNiAtNTQgMTYgLTE1NiBsMCAtMTMxIDMxIC0yNiBjMTcgLTE0IDQ0IC0yOSA2MCAtMzMgMTYKLTQgNDEgLTE1IDU2IC0yNSAxNCAtMTEgMzAgLTE5IDM1IC0xOSAxNiAwIDEzMSAtODggMTUwIC0xMTUgMTAgLTE0IDI5IC00MAo0MiAtNTYgMTMgLTE3IDMxIC00NSA0MCAtNjIgOSAtMTggMjIgLTQxIDI5IC01MiAzMSAtNTQgNjIgLTEzNSA2MyAtMTY2IGwxCi0zNCA4IDMyIGM0IDE4IDI5IDc1IDU1IDEyNyA1NCAxMDggMTI0IDE4MyAyMDEgMjE4IDczIDMyIDg5IDU3IDEyNCAyMDMgMjkKMTE2IDMxIDEzMyAxOSAxNjUgLTggMjMgLTEzIDg3IC0xMyAxODYgbDEgMTUyIDMyIDUxIGMxOCAyOCA1MiA2NiA3NCA4MyA0MQozMyA0MiAzMyAxNjYgMzYgNzMgMiAxNDAgLTEgMTYxIC03IDYyIC0yMCAxMzAgLTk1IDEzMCAtMTQ0IDAgLTE1IDEyIC01NCAyNwotODUgMjcgLTU2IDI3IC02MCAyOCAtMjY2IGwxIC0yMDggMzcgLTM0IGMyMCAtMTkgNDcgLTM0IDU5IC0zNCAxMyAwIDQ0IC0xMQo3MCAtMjUgMjYgLTE0IDU0IC0yNSA2MiAtMjUgMjQgMCAxNDUgLTEwMiAxNjEgLTEzNyA5IC0xOCAyMCAtMzMgMjUgLTMzIDUgMAoxOCAtMTkgMjggLTQzIDExIC0yMyAyOSAtNTEgNDEgLTYxIDExIC0xMSAyMSAtMjUgMjEgLTMyIDAgLTcgMTQgLTI5IDMxIC00OQoyNCAtMjcgMzIgLTQ1IDMyIC03NiAwIC0yMiAtNSAtNDUgLTEwIC01MCAtNSAtNSAtNDMgLTE2IC04NCAtMjUgLTYzIC0xNCAtODcKLTE0IC0xNjcgLTQgLTUwIDcgLTExMSA5IC0xMzUgNiAtMjMgLTQgLTI3OCAtOSAtNTY3IC0xMSAtNTgxIC01IC01ODcgLTQKLTYwNSA1MiBsLTExIDMzIC05IC0zMyBjLTYgLTE4IC0yMCAtMzcgLTM1IC00NCAtMTggLTggLTE1NyAtMTIgLTQ2OCAtMTUKbC00NDMgLTMgLTM4IDQxIGMtMjQgMjUgLTQxIDU1IC00NSA3OCAtNSAyMyAtMjAgNTEgLTQxIDcyIGwtMzUgMzQgLTE1IC0zNgpjLTggLTIwIC0xNSAtNDIgLTE1IC00OSAwIC0zNyAtODIgLTU2IC0yMDMgLTQ4IGwtOTcgNiAwIC0xNzYgMCAtMTc3IDE2MDAgMAoxNjAwIDAgMCA4OTUgMCA4OTUgLTE2MDAgMCAtMTYwMCAwIDAgLTQzMXoiLz4KPC9nPgo8L3N2Zz4K");
}
</style>