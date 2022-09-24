<template>
  <div :style="{ backgroundColor: bgColor, color: fontColor, fontSize: fSize+'px'}" class="headerContainer">{{title}}</div>
</template>

<script>
export default {
  name: "Header",
  props:{
    title:{
      type: String,
      default: "Header"
    },
    bgColor:{
      type: String,
      default: "#007BFF"
    },
    fontColor:{
      type: String,
      default: "#ffffff"
    },
    fSize:{
      type: Number,
      default: 12
    }
  }
}
</script>

<style scoped lang="scss">
  .headerContainer{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    z-index: 999;
  }
</style>