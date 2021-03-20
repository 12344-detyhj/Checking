<template>
<div class="sidebar ">
  <el-scrollbar
      mode="vertical"
  >
    <el-menu>

      <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </el-scrollbar>
</div>
</template>

<script>
import {mapGetters} from "vuex";
import sidebarItem from "@/views/Home/components/sidebar/sidebarItem";
export default {
  name: "sidebar",
  components:{
    sidebarItem
  },
  computed:{
    ...mapGetters([
        'permission_routes',
    ])
  }
}
</script>

<style scoped>
.sidebar{
  width: 250px;
  background-color: #505458;
  transition: width 0.28s;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
</style>