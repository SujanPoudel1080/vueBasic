<template>
    <h1>Our Clientele</h1>
<div>
    <section>
    <Splide  data-splide='{"type":"slide","perPage":3}' :options="{ rewind: true }" aria-label="My Favorite Images" class="slider">
    <SplideSlide>
      <img src="../assets/images/logo.png" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="../assets/images/logo.png" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="../assets/images/logo.png" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="../assets/images/logo.png" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="../assets/images/logo.png" alt="Sample 2">
    </SplideSlide>
  </Splide>
</section>
</div>
</template>

<script setup lang="ts">
import { Splide, SplideSlide} from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css';

</script>

<style scoped>
.slider{
    max-width: 90vw;
    text-align: center;
    padding: 5vw;
}
img {
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
}

img:hover {
    filter: none;
    -webkit-filter: grayscale(0);
}

h1{
    font-size: 38px;
    font-family: monospace;
    padding-top: 4vh;
}
section{
    max-width: 90%;
    margin: auto;
}
</style>