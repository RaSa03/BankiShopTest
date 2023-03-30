<template>
  <header>
    <div class="header">
      <div class="menu">
        <a
          v-for="(item, index) in menu"
          :key="index"
          :href="item.href"
          class="link"
          ><h5>
            {{ item.content }}
          </h5>
        </a>
      </div>
      <div class="search">
        <form v-on:submit.prevent class="search-form">
          <input
            type="text"
            class="search-input"
            placeholder="Поиск по названию картины"
          />
          <button>Найти</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          href: "#",
          content: "Каталог",
        },
        {
          href: "#",
          content: "Доставка",
        },
        {
          href: "#",
          content: "Оплата",
        },
        {
          href: "#",
          content: "Контакты",
        },
        {
          href: "#",
          content: "О компании",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
header {
  border-bottom: 1px solid #e1e1e1;
}
.header {
  margin: 0 auto;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1216px;
  .menu {
    flex: 1 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #343030;
    a {
      margin: 0 24px;
    }
  }
  .search {
    &-form {
      display: flex;
    }
    &-input {
      color: #343030;
      padding: 0 16px;
      border: 1px solid #e1e1e1;
      border-right: none;
      font-weight: 400;
      font-size: 14px;
      width: 294px;

      &:focus {
        border: 1px solid #b5b5b5;
        border-right: none;
      }
      &::placeholder {
        color: #9f9f9f;
      }
    }
  }
}
@media (max-width: 1280px) {
  .header {
    max-width: 920px;
    .menu {
      a {
        margin: 0 14px;
      }
    }
  }
}
@media (max-width: 960px) {
  .header {
    padding: 20px;
    flex-direction: column;
    .menu {
      a {
        margin: 0 6px 10px;
      }
      flex: 1 1 auto;
      justify-content: space-around;
      width: 100%;
      flex-wrap: wrap;
    }
    .search {
      width: 100%;
      &-form {
        width: 100%;
        .search-input {
          width: 100%;
        }
      }
    }
  }
}
</style>
