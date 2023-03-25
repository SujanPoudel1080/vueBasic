<template>
    <button @click="scrollToTop" ref="appButton" class="app-button">
        <font-awesome-icon icon="arrow-up"></font-awesome-icon>
  </button>

</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const appButton = ref();
    const userScroll = () => {
      if (window.scrollY > 0) {
        appButton.value.classList.add("showButton");
        
      } else {
        appButton.value.classList.remove("showButton");
        
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", userScroll);
    });
    onBeforeMount(() => {
      window.removeEventListener("scroll", userScroll);
    });
</script>

<style>
.app-button {
  border-radius: 50%;
  background-color: #2c7695;
  color: #fff;
  border: none;
  height: 50px;
  width: 50px;
  padding: 4px;
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  display: none;
  right: 40px;
}
.app-button:hover{
  background-color:#65bbe1;
  color:#2c7695;
}

.showButton {
  display: block;
}
</style>