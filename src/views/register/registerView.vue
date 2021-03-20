<template>
  <div class="registerView">
    <background></background>
    <register></register>
  </div>

</template>

<script>
import Background from "@/components/background";
import Register from "@/views/register/components/register";
export default {
  name: "registerView",
  components: {Register, Background}
}
</script>

<style scoped>
  .registerView{
    position: static;
  }
</style>