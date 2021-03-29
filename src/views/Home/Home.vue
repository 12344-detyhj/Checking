<template>
  <div class="home">
    <sidebar/>
    <app-main/>
  </div>
</template>

<script>

// @ is an alias to /src
import mapGetters from 'vuex'
import mainMenu from "@/views/mainMenu/mainMenu";
import homeworkStudent from "@/views/homework/homeworkStudent";
import sidebar from '@/views/Home/components/sidebar/sidebar'
import appMain from "@/views/Home/components/appMain";
export default {
  name: 'Home',
  components: {
    mainMenu,
    homeworkStudent,
    sidebar,
    appMain,
  },
}
</script>
<style>
  .home{
    position: static;

  }

</style>