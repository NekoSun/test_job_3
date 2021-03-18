<template>
  <div class="fone">
    <svg>
      <line x1="0" y1="100%" x2="100%" y2="0" />
      <line x1="0" y1="0" x2="100%" y2="100%" />
    </svg>
    <main class="auth__wrapper">
      <div class="auth__logo">
        <img src="@/assets/img/logo.svg" >
      </div>
      <div class="row">
        <div class="col l7 m12 s12">
          <h1 class="auth__heading">
            Оптовые закупки<br />качественных нефтепродуктов<br />по лучшим ценам
          </h1>
          <div class="advantages__container">
            <ul class="advantages__list">
              <li class="advantages__item">
                <span class="advantages__point">
                  <img src="@/assets/img/report.svg" alt="">
                </span>
                <div class="advantages__item--text">
                  <div class="advantages__item--title">Удобное отслеживание динамики цен</div>
                  <div class="advantages__item--description">Краткое описание преимущества в пару строк</div>
                </div>
              </li>
              <li class="advantages__item">
                <span class="advantages__point">
                  <img src="@/assets/img/list.svg" alt="">
                </span>
                <div class="advantages__item--text">
                  <div class="advantages__item--title">Быстрое оформление</div>
                  <div class="advantages__item--description">Краткое описание преимущества в пару строк</div>
                </div>
              </li>
              <li class="advantages__item">
                <span class="advantages__point">
                  <img src="@/assets/img/oil.svg" alt="">
                </span>
                <div class="advantages__item--text">
                  <div class="advantages__item--title">Широкий выбор</div>
                  <div class="advantages__item--description">Краткое описание преимущества в пару строк</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col l5 m12 s12">
          <TabAuth/>
        </div>
      </div>
    </main>
    <Bottom/>
  </div>
</template>

<script>
import Bottom from '@/components/Bottom'
import TabAuth from '@/components/TabAuth'

export default {
  components: {
    Bottom,
    TabAuth
  }
};
</script>

<style lang="scss" scoped>
@import './src/assets/style/mixins';
@import './src/assets/style/variables';
.fone {
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    line {
      stroke: #000000;
      stroke-width: 1;
      opacity: 0.1;
    }
  }

  .auth {
    &__wrapper {
      max-width: 1280px;
      margin: 0 auto;
      height: 92%;

    }

    &__logo {
      padding-top: 30px;
      padding-bottom: 74px;
    }
  }
}

h1.auth__heading {
  padding-bottom: 44px;

  @include font(38px, 250, 140%, #141414)
}

.advantages {
  color: #141414;

  &__point {
    width: 63px;
    height: 63px;
    background-color: #ffffff;
    border-radius: 50%;

    box-shadow: 0px 4px 10px rgba(221, 222, 222, 0.5);

    img {
      width: 32px;
      height: 32px;
    }

    @include flex_center;
  }

  &__item {

    display: flex;
    padding-bottom: 40px;

    &--text {
      width: 215px;
      padding-top: 10px;
      margin-left: 26px;
    }

    &--title {
      text-transform: uppercase;
    }

    &--description {
      text-transform: none;
      @include font(13px, 250, 21px)

    }

    @include font(16px, 300, 151.2%)
  }
}
</style>
