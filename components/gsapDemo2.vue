<template>
  <div class="flip-container">
    <div class="flip-card" @mouseenter="flipObject" @mouseleave="flipObject">
      <div class="flip-card-front">
        <!-- Front content -->
        <h1>Front</h1>
      </div>
      <div class="flip-card-back">
        <!-- Back content -->
        <h1>Back</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { gsap } from "gsap";
const { $gsap, $Flip } = useNuxtApp();

onMounted(() => {});
let isFlipped = ref(true);
function flipObject() {
  isFlipped = !isFlipped;
  $gsap.to(".flip-card", {
    rotationY: isFlipped ? 0 : 180,
    duration: 0.1,
  });
}
</script>

<style>
.flip-container {
  perspective: 1000px;
}

.flip-card {
  width: 200px;
  height: 200px;
  transition: transform 1s;
  transform-style: preserve-3d;
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
    color: black;
}

.flip-card-back {
  background-color: gold;
  transform: rotateY(180deg);
}

.flipped {
  transform: rotateY(180deg);
}
</style>
