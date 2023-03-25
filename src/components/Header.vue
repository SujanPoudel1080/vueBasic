<template>
  <div class="container">
    <nav class="navbar">
      <div class="logo">
        <img width="80" :src="logo" />
        <h1 class="name">OASYS I.T. SOLUTIONS</h1>
      </div>
      <div class="link">
        <a href="#" class="link">About Us</a>
        <a href="#" class="link">Contact Us</a>
        <a href="#" class="link">Portfolio</a>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import logo from "../assets/images/logo.png";
</script>

<style scoped>
.container{
    position: sticky;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-content: center;
  max-width: 90%;
  margin: auto;
}
.logo {
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
}
img{
  width: 80px;
  animation: rotation 6s infinite linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.name {
  font-size: 24px;
  color: #2c7695;
  font-weight: bolder;
  margin: auto;
  margin-left: 10px;
  font-family: monospace;
}
.link {
  margin-left: 15px;
  margin-top: 35px;
  font-size: 18px;
  color: #2c7695;
  font-weight: bolder;
  font-family: Arial, Helvetica, sans-serif;
}
.link:hover {
  color: #50bfc3;
}
.icon {
  align-items: center;
  margin-right: 40px;
}
.indic {
  margin-right: 9px;
}
.indic:hover {
  color: goldenrod;
}

.info {
  border-radius: 30px;
  font-size: 18px;
  font-family: monospace;
  font-weight: lighter;
  color: #fff;
  width: 170px;
  height: 50px;
  background-color: #2c7695;
  border: none;
}
.info:hover {
  background-color: rgb(72, 198, 230);
  color: #ffffff;
}
</style>
