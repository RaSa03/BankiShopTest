<template>
  <div class="app">
    <modal-with-slider
      v-if="modalWindow"
      :modalData="modalData"
      @close="modalWindow = false"
    >
    </modal-with-slider>
    <my-header v-model="searchedCard" @search-product="giving"></my-header>
    <div class="body">
      <div class="title">
        <h1>Картины эпохи Возрождения</h1>
      </div>
      <div class="cards">
        <div
          v-for="(card, index) in filteredCards"
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
            <h2 @click="showModal(card)">{{ card.name }}</h2>
            <div v-if="card.price" class="sales-area">
              <div class="prices">
                <span v-if="card['previous-price']" class="previous-price"
                  >{{ card["previous-price"] }}$</span
                >
                <span class="price">{{ card.price }}$</span>
              </div>
              <button
                @click="buy(card.name)"
                :disabled="processed[card.name]"
                :class="{ purchased: purchased[card.name] }"
              >
                <span v-if="processed[card.name]">Обрабатывается</span>
                <span v-else-if="purchased[card.name]"
                  ><img src="@/assets/icons/checked.svg" alt="" class="chek" />В
                  корзине</span
                >
                <span v-else>Купить</span>
              </button>
            </div>
            <div v-else class="sold">Продана на аукционе</div>
          </div>
        </div>
      </div>
    </div>
    <my-footer id="footer"></my-footer>
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
      searchedCard: "",
      purchased: {},
      processed: {},
    };
  },
  methods: {
    showModal(card) {
      this.modalWindow = true;
      this.modalData = card;
    },
    searchCards() {
      return this.cards.filter((card) =>
        card.name.toLowerCase().includes(this.searchedCard.toLowerCase())
      );
    },
    giving(newSearch) {
      this.searchedCard = newSearch;
    },
    buy(cardName) {
      this.processed[cardName] = true;
      this.$forceUpdate();
      if (this.purchased[cardName]) {
        setTimeout(() => {
          this.purchased[cardName] = false;
          this.processed[cardName] = false;
          localStorage.setItem("purchased", JSON.stringify(this.purchased));
        }, 2000);
      } else {
        setTimeout(() => {
          this.purchased[cardName] = true;
          this.processed[cardName] = false;
          localStorage.setItem("purchased", JSON.stringify(this.purchased));
        }, 2000);
      }
    },
  },
  computed: {
    filteredCards() {
      return this.searchedCard === "" ? this.cards : this.searchCards();
    },
  },
  mounted() {
    if (localStorage.getItem("purchased")) {
      this.purchased = JSON.parse(localStorage.getItem("purchased"));
    }
    fetch(
      "https://my-json-server.typicode.com/RaSa03/fakeServerForBankiShop/renaissance-paintings"
    )
      .then((promise) => promise.json())
      .then((data) => {
        this.cards = data;
      })
      .catch((er) => console.log(er));
  },
};
</script>
<style lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
        cursor: pointer;
      }
      &-body {
        padding: 24px;

        h2 {
          cursor: pointer;
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
          button {
            &:disabled {
              background: #c1b4b1;
            }
            &:hover {
              background: #776763;
            }
          }

          .purchased {
            background: #5b3a32;
            padding: 14px 10px;
            .chek {
              margin-right: 7px;
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
