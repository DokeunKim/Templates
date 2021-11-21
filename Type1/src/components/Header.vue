<template>
    <div id="header">
        
    </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
  border:0;
}
#header{
  width: calc(100% - 180px);
  height: 81px; 
  left: 180px;
  display: flex;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
  position:absolute;
}
#back-button{
  display: flex;
}
#back-button img{
  width: 26px;
  height: 26px;
  box-sizing: border-box;
  margin: auto 6px auto 20px;
  border-radius: 4px;
  border: solid 1px #707070;
  background-color: #fff;
  padding: 5.7px 5.9px 4.1px 4.3px;

}
#back-button span{
  margin: auto 0;
}
.line{
  width: 0;
  height: 28px;
  border: solid 1px #ddd;
}
#line_1{
  margin: auto 18px auto 17px;
}
#line_2{
  margin: auto 30px auto 29.6px;
}
#view-title{
  margin: auto 0;
  flex:1;
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.4px;
  text-align: left;
  color: #0339a6;
}
#profile-card{
  display: flex;
}
#profile-img{
  width: 27px;
  height: 27px;
  margin: auto 0;
  box-sizing: border-box;
  padding: 4.1px 8.7px 7px 8.1px;
  border-radius: 50%;
  background-color: #0339a6;
}
#profile-id{
  margin: auto 0 auto 7px;
  font-family: NotoSansCJKkr;
  font-size: 14px;
  padding: 0 0 4px 0;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: -0.35px;
  text-align: left;
  color: #666;
}
#profile-access{
  margin: auto 0 auto 3px;
  font-family: NotoSansCJKkr;
  font-size: 11px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  padding: 0 0 4px 0;
  letter-spacing: -0.28px;
  text-align: left;
  color: #666;
}
#user-info-edit{
  margin:auto 0;
}
#logout{
  margin:auto 38px auto 30px;
}
</style>
