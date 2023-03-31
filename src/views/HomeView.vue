<template>
  <div class="app" :class="{ 'no-scroll': modalWindow }">
    <my-header></my-header>
    <div class="body">
      <div class="title">
        <h1>Картины эпохи Возрождения</h1>
      </div>
      <div class="cards">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="card"
          :class="{ sold: card.sold }"
        >
          <img
            @click="showModal(card)"
            :src="card.img"
            :alt="card.name"
            class="card-img"
          />
          <div class="card-body">
            <h2>{{ card.name }}</h2>
            <div v-if="card.price" class="sales-area">
              <div class="prices">
                <span v-if="card['previous-price']" class="previous-price"
                  >{{ card["previous-price"] }}$</span
                >
                <span class="price">{{ card.price }}$</span>
              </div>
              <button class="">Купить</button>
            </div>
            <div v-else class="sold">Продана на аукционе</div>
          </div>
        </div>
      </div>
    </div>
    <my-footer id="footer"></my-footer>
    <modal-with-slider v-if="modalWindow" :modalData="modalData">
    </modal-with-slider>
  </div>
</template>
<script>
import modalWithSlider from "@/components/modalWithSlider.vue";
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
export default {
  components: {
    "modal-with-slider": modalWithSlider,
    "my-header": MyHeader,
    "my-footer": MyFooter,
  },
  data() {
    return {
      cards: [],
      modalWindow: false,
      modalData: {},
    };
  },
  methods: {
    showModal: function (card) {
      this.modalWindow = true;
      this.modalData = card;
    },
  },
  mounted() {
    fetch(
      "https://my-json-server.typicode.com/RaSa03/fakeServerForBankiShop/renaissance-paintings"
    )
      .then((promise) => promise.json())
      .then((data) => {
        this.cards = data;
      });
  },
};
</script>
<style lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.no-scroll {
  overflow: hidden;
}

.body {
  flex: 1 0 auto;
  max-width: 1216px;
  margin: 0 auto;
  padding: 45px 0;
  .title {
  }
  .cards {
    display: flex;
    flex-wrap: wrap;

    margin: 0 -16px;
    .card {
      height: 328px;
      width: 280px;
      margin: 16px;
      border: 1px solid #e1e1e1;
      &-img {
        height: 160px;
        width: 280px;
      }
      &-body {
        padding: 24px;

        h2 {
        }
        .sales-area {
          margin-top: 22px;
          display: flex;
          justify-content: space-between;

          .prices {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-style: normal;
            font-size: 14px;
            line-height: 150%;
            .previous-price {
              font-weight: 300;
              text-decoration-line: line-through;
              color: #a0a0a0;
            }
            .price {
              font-weight: 700;
              color: #343030;
            }
          }
        }
        .sold {
          font-weight: 700;
          font-size: 16px;
          line-height: 150%;
          color: #343030;

          margin-top: 34px;
        }
      }
    }
  }
  .sold {
    opacity: 0.4;
  }
}
@media (max-width: 1280px) {
  .body {
    max-width: 920px;
  }
}
@media (max-width: 940px) {
  .body {
    max-width: none;
    padding: 0 20px;
    .title {
      margin-top: 20px;
      text-align: center;
    }
    .cards {
      justify-content: center;
    }
  }
}
</style>
