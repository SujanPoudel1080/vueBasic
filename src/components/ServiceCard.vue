<template>
      <div class="card" v-for="service in services" :key="service as Service['id']">
      <div class="card-body">
        <img class="card-image" :src="`${(service as Service).image}`" />
      </div>
      <div class="card-footer">
        <h1 class="card-text">{{ (service as Service).name }}</h1>
      </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, inject } from 'vue';
import type { Ref } from 'vue';
import type Service from '../utils/types/Service';
import { serv } from "@/utils/services";


// const servicesList = reactive({

// })

const services = inject('services')



onMounted(() => {
  console.log(serv)
  console.log(services)
})
</script>

<style>
.card {
  text-align: center;
  width: 350px;
  height: 450px;
  background: white;
  box-shadow: 0px 0px 0px grey;
  -webkit-transition: box-shadow 0.6s ease-out;
  transition: box-shadow 0.6s ease-out;
  box-shadow: 0.8px 0.9px 3px grey;
  margin-bottom: 10vh;
  align-items: center;
}
.card:hover {
  box-shadow: 1px 8px 20px rgb(6, 97, 157);
  -webkit-transition: box-shadow 0.6s ease-in;
  transition: box-shadow 0.6s ease-out;
}

body {
  background-color: #f0efee;
}
.card-body {
  width: 350px;
  height: 350px;
}
.card-image {
  width: 350px;
}
.card-footer {
  width: 350px;
  height: 100px;
  background-color: #2c7695;
  box-shadow: 0.8px 0.9px 3px rgb(6, 97, 157);
  text-align: center;
  align-items: center;
}
.card-text {
  font-size: 26px;
  font-family: monospace;
  color: #50bfc3;
  padding-top: 1vh;
  align-items: center;
}
.card-text:hover {
  color: #fff;
}
</style>
