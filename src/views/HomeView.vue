<script setup lang="ts">
import {ref, reactive} from 'vue'
const restaurantList = ref<string[]>([])
const newRestaurantName = ref('')
const addRestaurant = () =>{
  restaurantList.value.push(newRestaurantName.value)
}
</script>

<template>
  <main>
    <form @submit.prevent="addRestaurant()">
      <label>Enter name of restaurant</label>
      <input class="rest" v-model="newRestaurantName" type="text" placeholder="restaurant name" /> 
      <!-- <button @click="addRestaurant()">Add</button> -->
    </form>
    <li v-for="restaurant in restaurantList" :key="restaurant">{{ restaurant }}</li>
  </main>
</template>

<style>
.rest{
  margin-left: 10px;
}
</style>