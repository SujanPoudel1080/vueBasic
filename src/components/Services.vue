<template>
<div class="services-container">
    <div>
    <h1 class="title-heading">Our Services</h1>
    </div>
    <div class = "card-box">
        <ServiceCard :serv="{serv}"/>
    </div>
    
</div>
</template>

<script setup lang="ts">
import { provide, onMounted, reactive } from 'vue';
import ServiceCard from './ServiceCard.vue';
import {serv}  from '../utils/services';

const services = reactive(serv);
provide('services' , services)

</script>

<style scoped>
.services-container{
    background: rgb(199,236,254);
background: radial-gradient(circle, rgba(199,236,254,1) 0%, rgba(0,212,255,1) 63%, rgba(44,118,149,1) 100%);
    color: #2c7695;
    padding-left: 5vw;
}
.card-box{
    column-count:2;
    margin-top: 2vh;
    justify-content: space-between;
    column-gap: 33vw;
}
h1{
    font-size: 38px;
    font-family: monospace;
    padding-top: 4vh;
}
</style>
