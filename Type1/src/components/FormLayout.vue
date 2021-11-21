<!-- Robot Control Home -->
<template>
    <div class="form-layout">
       <dashboard :id="'dashExample'">
        <dash-layout v-for="layout in dlayouts" v-bind="layout" :key="layout.breakpoint">
        <dash-item v-for="item in layout.items" v-bind.sync="item" :key="item.id">
          <div class="content"></div>
        </dash-item>
      </dash-layout>
    </dashboard>
    </div>
</template>

<script>
//import {getCurrentInstance} from 'vue'
import {Dashboard, DashLayout, DashItem } from "vue-responsive-dash";

export default {
    name: 'FormLayout',
    components:{
        Dashboard,
        DashLayout,
        DashItem
    },
    data: () => ({

        dlayouts: [{
          breakpoint: "a",
          numberOfCols: 50,
          items: [
            { id: "1", x: 0, y: 0, width: 1, height: 1 },
            { id: "2", x: 0, y: 0, width: 2, height: 1 },
            { id: "3", x: 0, y: 0, width: 1, height: 1 },
            { id: "4", x: 0, y: 0, width: 4,minWidth:4, maxWidth: 5, height: 1 },
          ]
        }]
    }),
    created(){
        this.layout = Array.from(Array(this.layoutRow), () => new Array(this.layoutCalumn));
    },
    mounted(){
        console.log(this.layout);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
    scroll bar
*/
#dashExample::-webkit-scrollbar {
  width: 0px;
}

.form-layout{
    position:absolute;
    display:flex;
}
.div-row{
    display:flex;
}
.div-col{
    height:100%;

}
#dashExample{
    flex:1;
    overflow-x: hidden;
    overflow-y: auto;
    
}
.content {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  box-shadow:
      4px 4px 4px rgba(0,0,0,0.3),
      0px 0px 4px rgba(0,0,0,0.3);
}
.content:hover{
    background-color: #d9d9d9;
}
</style>
