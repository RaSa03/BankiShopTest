<template>
  <footer>
    <div class="footer">
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
      <div class="contacts">
        <a href="tel:+7 (812) 555-55-55" class="phone">
          <img src="@/assets/icons/phone.svg" alt="" />
          +7 (812) 555-55-55</a
        >
        <a href="map:г. Санкт-Петербург, ул. Ефимова, 3" class="address">
          <img src="@/assets/icons/adres.svg" alt="" />
          г. Санкт-Петербург, ул. Ефимова, 3</a
        >
      </div>
    </div>
  </footer>
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
footer {
  background: #eceaea;
}
.footer {
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
  .contacts {
    display: flex;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #555555;
    flex: 1 0 auto;
    justify-content: space-around;
    * {
      display: flex;
      align-items: center;
      img {
        margin-right: 10px;
      }
    }
  }
}
@media (max-width: 1280px) {
  .footer {
    flex-wrap: wrap;

    max-width: 920px;
    .menu {
      a {
        margin: 0 6px 10px;
      }
      flex: 1 1 auto;
      justify-content: space-around;
      width: 100%;
      flex-wrap: wrap;
    }
    .contacts {
      width: 100%;
      .phone {
        margin: 10px 0;
        margin-right: 12px;
      }
    }
  }
}
@media (max-width: 960px) {
  .footer {
    padding: 20px;
    flex-direction: column;
    .menu {
    }
    .contacts {
      flex-wrap: wrap;
    }
  }
}
</style>
