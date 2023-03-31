<template>
  <div class="slider">
    <button class="prev" @click="prev">&#10094;</button>
    <div v-for="i in [currentIndex]" :key="i" class="img">
      <img :src="currentImg" />
    </div>
    <button class="next" @click="next">&#10095;</button>
  </div>
</template>
<script>
export default {
  props: {
    images: Array,
  },
  data() {
    return {
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    // this.startSlide();
  },

  methods: {
    // startSlide: function () {
    //   this.timer = setInterval(this.next, 4000);
    // },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length].url;
    },
  },
};
</script>

<style scoped>
.slider {
  display: flex;
  align-items: center;
  justify-content: center;
}
.img {
  overflow: hidden;
  width: 740px;
  max-height: 500px;
  display: flex;
  align-items: center;
  background: #000000b6;
}
img {
  width: 100%;
}

.prev,
.next {
  font-size: 40px;
  cursor: pointer;
  height: 500px;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
@media (max-width: 950px) {
  .img {
    width: 70wv;
    max-height: 50vh;
  }
}
</style>
