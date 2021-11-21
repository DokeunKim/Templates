<template>
  <div class="menu-bar" 
    :style="{
        backgroundColor: mainColor
    }">
    <div id="logo-container">
      <img src="../assets/logo.png" class="logo">
    </div>
    <div v-for="(m,index) in menu" :key="index" id="menu-container">
      <div v-if="!m.subMenuUse">
        <router-link class="router-link" :to="{ name: m.routeName }"><div class="menu hover">{{m.title}}</div></router-link>
      </div>
      <div v-else>
        <div class="menu hover" @click='clickMenu($event)'>{{m.title}}</div>
        <div class="dropdown-container main-color2">
          <router-link v-for="(sm,index) in m.subMenu" :key="index" class="router-link" :to="{ name: sm.routeName }"><div class="sub-menu" :style="{height:subMenuHeight}">{{sm.title}}</div></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import menuConfig from '../config/menu.js';

export default {
    name: 'MenuBar',
    props:{        
        mainColor: String
    },
    data: () => ({
        menu: menuConfig.menu,
        subMenuHeight: menuConfig.subMenuHeight + 'px'
    }),
    methods:{
        
        clickMenu: (e) => {
            e.currentTarget.classList.toggle("active");
            const subMenu = e.currentTarget.nextElementSibling;
            const subMenuCount = subMenu.children.length;

            if(subMenu.offsetHeight === 0)
                subMenu.style.height = menuConfig.subMenuHeight * subMenuCount + 'px';
            else
                subMenu.style.height = "0px";
        }
    },
    mounted(){
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu-bar{
  display: flex;
  flex-direction: column;
  z-index: 7;
  width: 180px;
  height: 100%;
  position: absolute;
}
#logo-container{
  display: flex;
  height: 81px;
  border-bottom: solid 1px #fff7e8;
  margin: 0 0 19px 0;
}
#logo-container div{
  display:flex;
}
.logo{
  padding: 0 9px 0 0;
  margin:auto;
  width: 80%;
}
#menu-container{
  display: flex;
  flex-direction: column;
}
.menu{
  cursor: pointer;
  flex:1;
  height: 44px;
  box-sizing: border-box;
  margin: 0 0 6px 0;
  padding: 11px 0 13px 30px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: -0.35px;
  text-align: left;
  color: #fff7e8;
}
.dropdown-container {
  height: 0px;
  padding-left: 8px;
  transition: 0.3s;
  overflow:hidden;
  
}

.sub-menu{
    display: flex;
    margin:0 auto 0 10px;
    font-family: NotoSansCJKkr;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 2;
    letter-spacing: -0.35px;
    text-align: center;
    color: white;
    padding: 0 19.5px 0 20.5px;
}

</style>
