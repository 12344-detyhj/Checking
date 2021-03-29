<template>
<div class="mainMenu">
  <component :is="currentRole" />
</div>
</template>

<script>
import {mapGetters}from 'vuex'
import menuStu from "./menuStu";
import menuTea from "./menuTea";
export default {
  name: "mainMenu",
  components:{menuTea,menuStu},
  data(){
      return{
        currentRole:'menuStu'
      }
  },
  computed:{
    ...mapGetters([
        'roles',
    ])
  },
  created() {
    if (this.roles.includes('teacher')) {
      this.currentRole = 'menuTea'
    }
  }
}
</script>

<style scoped>

</style>