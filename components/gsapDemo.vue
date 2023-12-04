<template>
  <section class="boxes-container" ref="main">
    <h1 class="-top-10">Use the button to toggle a Timeline</h1>
    <div>
      <button
        class="border border-solid bottom-2 px-8 py-4 font-bold bg-slate-300 rounded-lg hover:bg-slate-400 hover:text-white transition-all hover:shadow-lg hover:scale-105 hover:rotate-1 hover:translate-y-1"
        @click="toggleTimeline"
      >
        Toggle Timeline
      </button>
    </div>
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
  </section>
</template>

<script setup lang="ts">
const { $gsap, $Flip } = useNuxtApp();
const main = ref();
let tl: gsap.core.Timeline;
let ctx: any; //Animation Context GSAP

function toggleTimeline() {
  tl.reversed(!tl.reversed());
}

onMounted(() => {
  ctx = $gsap.context((self: any) => {
    const boxes = self.selector(".box");
    tl = $gsap
      .timeline()
      .to(boxes[0], { x: 120, rotation: 360 })
      .to(boxes[1], { x: -120, rotation: -360 }, "<")
      .to(boxes[2], { y: -166 })
      .reverse();
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<style scoped>
.boxes-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.box {
  background-color: var(--green);
  width: 100px;
  height: 100px;
  border-radius: 10px;
  font-size: 24px;
  text-align: center;
  line-height: 100px;
}
</style>
