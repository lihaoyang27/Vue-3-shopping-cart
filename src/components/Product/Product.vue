<template>
    <div class="productContainer">
      <div class="left">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" :id="'product'+id" @change="handleChange" :checked="state">
          <label class="form-check-label" :for="'product'+id">
            <img :src="thumb" alt="thumb">
          </label>
        </div>
      </div>
      <div class="right">
          <div class="top">{{name}}</div>
          <div class="bottom">
              <div class="price">${{price}}</div>

                  <!-- 数量-->
            <Counter :num="count" :id="id"></Counter>

          </div>
      </div>
    </div>
</template>

<script>
import Counter from "../Counter/Counter.vue";

export default {
  name: "Product",
  components:{
    Counter
  },
  props:{
    id:{
      type:[String, Number],
      required: true
    },
    thumb:{
      type: String
    },
    price:{
      type: Number
    },
    state:{},
    name:{},
    count:{}
  },
  methods:{
    handleChange(e){
      this.$emit('onStateChange', {id:this.id, state:e.target.checked})
    }
  },
  emits:['onStateChange']

}
</script>

<style scoped lang="scss">
  .productContainer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 125px;
    margin: .5rem 0;
    position: relative;
    & .right{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height:100%;
      & .top{
        font-weight: bold;
        font-size: .8rem;
        padding: .2rem;
      }
      & .bottom{
        padding: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & .price{
          color: orangered;
        }
      }
    }
  }
  .form-check-input{
    position: absolute;
    top: 54px;
  }
</style>