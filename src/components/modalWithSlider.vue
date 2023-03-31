<template>
  <div class="modal">
    <div class="window">
      <img-slider :images="modalData['img-slider']"></img-slider>
      <div class="body">
        <h4 class="description">
          {{ modalData.description }}
        </h4>
        <h4 v-if="modalData.price">
          Цена: <br />
          {{ modalData.price }}$
        </h4>
      </div>
      <button @click="$emit('close')" class="close">Закрыть</button>
    </div>
  </div>
</template>
<script>
import imgSlider from "./imgSlider.vue";
export default {
  components: {
    "img-slider": imgSlider,
  },
  props: {
    modalData: Object,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: rgba(33, 24, 15, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: scroll;

  .window {
    z-index: 999;
    color: whitesmoke;
    background: #000;
    max-width: 800px;

    .body {
      padding: 20px;
    }
    .close {
      width: 100%;
    }
  }
}
@media (max-width: 950px) {
  .modal {
    .window {
      display: flex;
      flex-direction: column;
      max-width: none;
      width: 100%;
      min-height: 100%;
      .body {
        flex: 1 0 auto;
      }
    }
  }
}
</style>
