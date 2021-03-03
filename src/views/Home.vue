<template>
  <div class="home">
<!--    router :default-active="$route.path"-->
    <el-aside class="el-aside">
      <h2>welcome!</h2>
<!--      <div v-text=this.userName+"身份："+this.identity></div>-->
      <div>id:{{identity}}</div>
      <div>name:{{userName}}</div>
      <el-menu  class="menu">
        <router-link  to="/mainMenu" class="menu-item" tag="div">
          <el-menu-item>main</el-menu-item>
        </router-link>
        <router-link  to="/homeworkStu" class="menu-item" tag="div">
          <el-menu-item>homework</el-menu-item>
        </router-link>
      </el-menu>
    </el-aside>
    <el-main class="content el-main">
      <router-view/>
    </el-main>
  </div>
</template>

<script>

// @ is an alias to /src
import mainMenu from "@/components/mainMenu";
import homeworkStudent from "@/components/homeworkStudent";
export default {
  name: 'Home',
  components: {
    mainMenu,
    homeworkStudent,
  },
  mounted:function(){
      console.log(this.identity)
      console.log(this.userName)
  },
  data(){
    return{
      identity: this.$route.query.identity,
      userName: this.$route.query.userName,
    }
  }
}
</script>
<style>
  .home{
    position: static;
  }
  .menu{
    width: 250px;
    /*height: 50px;*/

    background-color: deepskyblue;
  }
  .menu-item{
    width: 100%;
    height: 100%;
    /*background-color: deepskyblue;*/
    text-decoration: none;
  }

</style>