<script >
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import Product from "./components/Product/Product.vue";
import 'bootstrap/scss/bootstrap.scss';
import bus from "./eventBus";

export default {

  components:{
    Header,
    Footer,
    Product
  },
  data(){
    return{
      cartList: [],

    }
  },
  methods:{
    async fetchData(){
      const {data : res} = await this.$axios.get('/api/cart')
      if(res.status === 200){
        this.cartList = res.list
        console.log(res.list)
      }else{
        alert("Can't fetch data!")
      }
    },
    handleSelectAll(val){
      this.cartList.forEach(i => i.goods_state = val)
    },
    handleStateChange(val){
      const {id, state} = val
      this.cartList.find( i => i.id === id).goods_state = state
    }
  },
  computed:{
    isSelectAll(){
      if( this.cartList.filter(i => !i.goods_state).length > 0){
        return false
      }else{
        return true
      }
    },
    amount(){
      let sum = 0
      this.cartList.filter(i => i.goods_state)
      .forEach(i => {
        sum += i.goods_price * i.goods_count
      })
      return sum
    },
    total(){
      let sum = 0
      this.cartList.filter(i => i.goods_state)
          .forEach(i => {
            sum += i.goods_count
          })
      return sum
    }

  },
  created() {
    this.fetchData()
    bus.on('numChange',(val)=> {
      const {id, countNum} = val
      this.cartList.find(i => i.id === id).goods_count = countNum
    })
  }
}
</script>

<template>
  <div class="appContainer">
    <Header title="Cart Page" fSize="20"></Header>
    <Product
      v-for="item in cartList"
      :key="item.id"
      :id="item.id"
      :thumb="item.goods_img"
      :price="item.goods_price"
      :state="item.goods_state"
      :name="item.goods_name"
      :count="item.goods_count"

      @onStateChange="handleStateChange"
    ></Product>
    <Footer @onSelectChange="handleSelectAll" :selectAll="isSelectAll" :amount="amount" :total="total"></Footer>
  </div>
</template>

<style scoped lang="scss">
  .appContainer{
    padding: 3rem 0;
  }
</style>
