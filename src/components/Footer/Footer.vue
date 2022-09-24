<template>
  <div class="footerContainer">
    <div class="form-check">
      <input class="form-check-inline" type="checkbox" value="" id="selectAllId" :checked="selectAll" @change="handleChange">
      <label class="form-check-label" for="selectAllId">
        Select All
      </label>
    </div>
    <div>
        <span>Total: </span>
      <span class="amount">$ {{ amount.toFixed(2) }}</span>
    </div>

    <div>
      <button type="button" class="btn btn-primary" :disabled="total === 0">Check Out({{total}})</button>
    </div>
  </div>

</template>

<script>


export default {
  name: "Footer",

  props:{
    selectAll:{
      default: false,
      type: Boolean,
    },
    total:{
      type: Number,
      default: 0
    },
    amount:{
      type: Number,
      default: 0
    }
  },
  methods:{
    handleChange(e){
      this.$emit('onSelectChange', e.target.checked)
    }
  },
  emits:['onSelectChange']


}
</script>

<style scoped lang="scss">
  .footerContainer{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 3rem;
    width: 100%;
    z-index: 999;
    line-height: 3rem;
    background-color: white;
    border-top: 1px solid #efefef;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0 .5rem;
    font-size: .8rem;
  }

  .amount{
    color: orangered;
    font-weight: bold;
  }
</style>