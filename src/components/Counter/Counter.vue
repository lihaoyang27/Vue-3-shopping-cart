<template>
  <div class="counterContainer">
    <button type="button" class="btn btn-light btm-sm" @click="onSub">-</button>
    <input type="number" class="form-control form-control-sm ipt-num" v-model.number.lazy="countNum"/>
    <button type="button" class="btn btn-light btm-sm" @click="onAdd">+</button>
  </div>
</template>

<script>
import bus from "../../eventBus";

export default {
  name: "Counter",
  props:{
    num:{
      type: Number
    },
    id:{
      type: Number
    }
  },
  data(){
    return {
      countNum: this.num
    }
  },
  methods:{
    onSub(){
      if(this.countNum === 1)return
      this.countNum--
    },
    onAdd(){
      this.countNum++
    }
  },
  emits:['numChange'],
  watch:{
    countNum(newVal){
      const intRes = parseInt(newVal)
      //input is not a number or less than 1, return 1
      if( isNaN(intRes) || intRes < 1){
        this.countNum = 1
        return
      }
      // float point number return integer
      if( String(newVal).indexOf(".") !== -1){
        this.countNum = intRes
        return
      }
      console.log(newVal)
      bus.emit('numChange', {id: this.id, countNum: this.countNum})
    }
  }
}
</script>

<style scoped lang="scss">
  .counterContainer{
    display: flex;
  }
  .btn{
    width: 25px;
    text-align: center;
    padding: 0;
  }
  .ipt-num{
    width: 34px;
    text-align: center;
    margin: 0 4px;
  }
</style>