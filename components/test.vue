<template>
  <div class="container">
    <div class="images-section">
      <div class="visible-images">
        <div class="image">
          <img src="https://picsum.photos/id/200/200/300" alt="" />
        </div>
        <div class="image">
          <img src="https://picsum.photos/id/3/200/300" alt="" />
        </div>
        <div class="image">
          <img src="https://picsum.photos/id/4/200/300" alt="" />
        </div>
        <div class="image">
          <img src="https://picsum.photos/id/5/200/300" alt="" />
        </div>
      </div>
      <div class="hidden-images">
        <div class="image">
          <img src="https://picsum.photos/id/200/200/300" alt="" />
        </div>
        <div class="image">
          <img src="https://picsum.photos/id/3/200/300" alt="" />
        </div>
        <div class="image">
          <img src="https://picsum.photos/id/4/200/300" alt="" />
        </div>
        <div class="image">
          <img src="https://picsum.photos/id/5/200/300" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
    const { $gsap, $Draggable, $ScrollTrigger } = useNuxtApp();
  const images = $gsap.utils.toArray(".image");

  const additionalX = { val: 0 };
  let containerWidth = innerWidth;
  let additionalXAnim;
  let offset = 0;

  images.forEach((item) => {
    $gsap.to(item, {
      x: -containerWidth,
      duration: 4,
      repeat: -1,
      ease: "none",
      modifiers: {
        x: gsap.utils.unitize((x) => {
          offset += additionalX.val;
          x = (parseFloat(x) + offset) % -containerWidth;
          return x;
        }),
      },
    });
  });

  const imagesScrollerTrigger = $ScrollTrigger.create({
    trigger: ".image-section",
    start: "top 50%",
    end: "bottom 50%",
    onUpdate: function (self) {
      const velocity = self.getVelocity();

      if (velocity > 0) {
        if (additionalXAnim) additionalXAnim.kill();

        additionalX.val = -velocity / 100;
        additionalXAnim = gsap.to(additionalX, { val: 0 });
      }
    },
  });
});
</script>

<style lang="scss" scoped>
body {
  overflowx: hidden;
}

.visible-images {
  width: 100vw;
  display: flex;
}

.hidden-images {
  width: 100vw;
  display: flex;
}

.first-section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
}

.last-section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
}

.images-section {
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.image {
  width: 25vw;
  padding: 1vw;
  will-change: transform;
}
img {
  width: 20vw;
  height: 30vw;
}
</style>
