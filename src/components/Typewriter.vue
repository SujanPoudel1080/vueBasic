<template>
  <div class="hero">
    <Header/>
    <div class="divider">
        <div>
            <div class="hc">
        <h1 class="heading" aria-label="">
  <span class="typewriter"></span>
  <br />
  Your Imaginations&nbsp;
</h1>
    </div>
    <p class="herotext">Oasys I.T. Solutions is a software company founded by engineers striving for better innovation. Our company mainly focuses on providing innovative solutions that meet your need.</p>
<button class="info">GET STARTED
    <font-awesome-icon  class ="indic" icon="arrow-right" />
</button>

        </div>
        <Transition name="bounce">Hello!</Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import { Transition } from 'vue';
</script>

<style>
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero {
  background-image: url("../assets/images/bg2.jpg");
  background-size: cover;
  margin: auto;
  font-size: 48px;
  color: #2c7695;
  font-family: monospace;
  font-weight: 700;
  min-height: 100vh;
  position: relative;
}
.divider{
    display: flex;
    justify-content: space-between;
}
.hc{
    padding-left: 5vw;
}
.herotext{
    margin-top: 35px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: lighter;
    padding-left:5vw;
    max-width: 50vw;
    justify-content: left;
    font-size: 32px;
}
.heading{
    padding-top: 60px;
}
.info{
    border-radius: 30px;
    font-size: 18px;
    font-family: monospace;
    font-weight: lighter;
    color: #ffffff;
    width: 170px;
    height: 50px;
    margin-top: 30px;
    margin-left: 5vw;
    background-color: rgb(7, 101, 125);
    border: none;
}
.info:hover{
    background-color: #6ae2d6;
    color:  rgb(7, 101, 125);
    
}
/* Typewriter effect 1 */
@keyframes typing {
  0.0000%, 27.3488% { content: ""; }
  1.1395%, 26.2093% { content: "S"; }
  2.2791%, 25.0698% { content: "Sh"; }
  3.4186%, 23.9302% { content: "Sha"; }
  4.5581%, 22.7907% { content: "Shap"; }
  5.6977%, 21.6512% { content: "Shapi"; }
  6.8372%, 20.5116% { content: "Shapin"; }
  7.9767%, 19.3721% { content: "Shaping"; }
 
  30.7674%, 51.2791% { content: ""; }
  31.9070%, 50.1395% { content: "B"; }
  33.0465%, 49.0000% { content: "Bu"; }
  34.1860%, 47.8605% { content: "Bui"; }
  35.3256%, 46.7209% { content: "Buil"; }
  36.4651%, 45.5814% { content: "Build"; }
  37.6047%, 44.4419% { content: "Buildi"; }
  38.7443%, 43.3023% { content: "Buildin"; }
  39.8839%, 42.1627% { content: "Building"; }

  54.6977%, 75.2093% { content: ""; }
  55.8372%, 74.0698% { content: "R"; }
  56.9767%, 72.9302% { content: "Re"; }
  58.1163%, 71.7907% { content: "Red"; }
  59.2558%, 70.6512% { content: "Rede"; }
  60.3953%, 69.5116% { content: "Redef"; }
  61.5349%, 68.3721% { content: "Redefi"; }
  62.6745%, 67.2325% { content: "Redefin"; }
  63.8141%, 66.0929% { content: "Redefini"; }
  64.9537%, 64.9533% { content: "Redefinin"; }
  66.0933%, 63.8137% { content: "Redefining"; }

}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.typewriter {
  --caret: currentcolor;
  color: #50bfc3;
}

.typewriter::before {
  content: "";
  animation: typing 15.5s infinite;
}

.typewriter::after {
  content: "";
  border-right: 1px solid var(--caret);
  animation: blink 0.5s linear infinite;
}

.typewriter.thick::after {
  border-right: 1ch solid var(--caret);
}

.typewriter.nocaret::after {
  border-right: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

@media (prefers-reduced-motion) {
  .typewriter::after {
    animation: none;
  }
  
  @keyframes sequencePopup {
    0%, 100% { content: "Shaping"; }
    25% { content: "Building"; }
    50% { content: "Redefining"; }
    
  }

  .typewriter::before {
    content: "Shaping";
    animation: sequencePopup 15s linear infinite;
  }

  
}
</style>