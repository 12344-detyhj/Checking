<template>
  <div class="loginView">
    <background></background>
    <Login> </Login>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/login.vue'
import Background from "@/components/background";
export default {
  name: 'loginView',
  components: {
    Background,
    Login
  }
}
</script>
<style>
.loginView{
  position: static;
}
</style>