
<template>
  <div id="background">
    <img :src="imgSrc" width="100%" height="100%" alt="" />
  </div>
</template>

<script>
export default {
  name: "Background",
  data () {
    return {
      imgSrc: require('@/assets/background.jpeg')
    }
  }
}

</script>

<style>
#background {
  left: 0;
  top: 0;
  width:100%;
  height:100%;  /**宽高100%是为了图片铺满屏幕 */
  z-index:-1;
  position: absolute;
}
</style>