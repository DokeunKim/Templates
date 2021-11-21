<template>
    <div class="main">
        <dk-header></dk-header>
        <dk-menu-bar
            :main-color="mainColor"
        ></dk-menu-bar>
        <router-view class="router-view" ></router-view>
    </div>
</template>

<script>
import {default as DkHeader} from './Header.vue'
import {default as DkMenuBar} from './MenuBar.vue'

import color from '../config/colors.js';

export default {
    components: { 
        DkHeader, 
        DkMenuBar
    },
    name: 'Main',
    data: () => ({
        mainColor: color.mainColor
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  height: 100%;
  width: 100%;
  position: absolute;
}
.router-view{
  width: calc(100% - 180px);
  height: calc(100% - 83px);
  position: absolute;
  left: 180px;
  top:83px;
}
</style>
