<template>
  <div id="app">
    <div id="nav">
      <router-link to="/scroll">Scroll</router-link> |
      <router-link to="/resize">Resize</router-link> |
      <router-link to="/click">Click</router-link> |
      <router-link to="/params">Params</router-link> |
      <router-link to="/pfc">Pfc</router-link> |
      <router-link to="/mask">Mask</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  background-color: #444444;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #fff;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
