<template>

</template>
<div>
  Your roles:
  <span v-for="item in roles" :key="item">{{ item }}</span>
</div>
<script>
import {mapGetters} from "vuex";

export default {
  name: "menuTea",
  computed: {
    ...mapGetters([
      'roles',
    ])
  },
  created() {
    console.log('menuteacher')
  },

}
</script>

<style scoped>

</style>