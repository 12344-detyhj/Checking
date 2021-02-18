<template>
<div class="forgotPasswordView">
  <background></background>
  <forgot-password></forgot-password>
</div>
</template>

<script>
import forgotPassword from "@/components/forgotPassword";
import Background from "@/components/background";
export default {
  name: "forgotPasswordView",
  components:{
    Background,
    forgotPassword
  }
}
</script>

<style scoped>

</style>