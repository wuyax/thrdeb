<template>
  <div class="wrap">
    <div class="content">
      <img src="../assets/test.jpeg"
        alt="img">
    </div>
    <div class="mask">
      <div class="bullet-chat">
        <div class="chat chat1">弹幕</div>
        <div class="chat chat2">弹幕</div>
        <div class="chat chat3">弹幕</div>
        <div class="chat chat4">弹幕</div>
        <div class="chat chat5">弹幕</div>
      </div>
    </div>
  </div>
</template>
<script>
// https://cn.vuejs.org/v2/style-guide/#组件-实例的选项的顺序-推荐
export default {
  name: 'ImgMask',
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
  methods: {}
}
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 90vh;
  position: relative;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    // background: url(../assets/test.jpeg) no-repeat top;
    // background: linear-gradient(90deg, #fff, #fff 10%,rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 50%, #fff 67%,#fff );
    background-size: 100%;
    -webkit-mask-image: linear-gradient(90deg, #fff, #fff 10%,rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0) 50%, #fff 67%,#fff );
  }
  .bullet-chat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.chat {
  animation: bullet 3s linear infinite;
}
.chat2 {
  animation-delay: 0.5s;
}
.chat3 {
  animation-delay: 0.8s;
}
.chat4 {
  animation-delay: 1s;
}
.chat5 {
  animation-delay: 1.5s;
}
@keyframes bullet {
  from {
    transform: translateX(-3000%);
  }
  to {
    transform: translateX(3000%);
  }
}
</style>