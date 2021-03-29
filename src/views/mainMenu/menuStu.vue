<template>
<div>
  Your roles:
  <span v-for="item in roles" :key="item">{{ item }}</span>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: "menuStu",
  computed: {
    ...mapGetters([
      'roles',
    ])
  },
  created() {
      console.log('menustudent')
  },

}
</script>

<style scoped>

</style>