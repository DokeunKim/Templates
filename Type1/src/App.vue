<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
 @import "./assets/css/styles.css"; 
 @import "./assets/css/colors.css";
 
body{
  margin:0;
}
#app {
  height: 100%;
  width: 100%;
  position: absolute;
}
</style>
