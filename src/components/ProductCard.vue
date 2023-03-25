<template>
  <main>
    <div class="pc">
      <div class="pc-header"></div>
      <div class="pc-body">
          <img class="card-img" :src="image"  width="180px"/>
      </div>
      <div class="pc-footer">
          <div class="product-name">{{ product.name }}</div>
          <span>Rs. {{ product.price }}</span>
        <div class="product-details">
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import image from '@/assets/images/images.jpeg';

const product = reactive({
  name: "iphone 11",
  price: 80000,
  quantity: 20,
  seller: "evo store",
});
</script>

<style>
.pc {
  background-color: whitesmoke;
  width: 200px;
  height: 300px;
  text-align: center;
  border: goldenrod;
  outline-style: solid;
  outline-color: goldenrod;
  border-radius: 6px;
  border-width: 5px;
  margin: 20px;
  
} 
.pc:hover {
    box-shadow: 2px 5px 5px;
}
.cart {
    background-color: goldenrod;
    margin: 2px;
  padding: 5px;
}
.product-name{
    color: goldenrod;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 100;
    font-size:small;
    margin-bottom: 2px;
}

.card-img{
    width: 200px;
    border-radius: 2px;
}

</style>
