<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ProductCard from './components/ProductCard.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Clientele from './components/Clientele.vue';
import Typewriter from './components/Typewriter.vue';
import AppButton from './components/AppButton.vue';
import Services from './components/Services.vue';
</script>

<template>
  <!-- <RouterView /> -->
  <!-- <ProductCard />
  <Footer /> -->
  <Typewriter />
  <Services/>
  <AppButton/>
  <Clientele/>
</template>

<style scoped>
</style>
