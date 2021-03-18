<template>
  <div class="another-registration">
    <h2 class="another-registration__title">Другие способы регистрации</h2>
    <div class="row">
      <div class="col s6">
        <button class="another-registration__button">
          Войти по Сбербанк ID
        </button>
      </div>
      <div class="col s6">
        <button class="another-registration__button">
          по номеру телефона
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <button class="another-registration__button another-registration__button--gmail">
          <img src="@/assets/img/ico-gmail.svg" >
          GMAIL
        </button>
      </div>
      <div class="col s6">
        <button class="another-registration__button another-registration__button--facebook">
          <img src="@/assets/img/ico-facebook.svg" >
          FACEBOOK
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col s6">
        <button class="another-registration__button another-registration__button--vc">
          <img src="@/assets/img/ico-vk.svg" >
          Вконтакте
        </button>
      </div>
      <div class="col s6">
        <button class="another-registration__button another-registration__button--icloud">
          <img src="@/assets/img/ico-icloud.svg" >
          icloud
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import './src/assets/style/mixins';
  @import './src/assets/style/variables';

  .another-registration {
    padding-top: 50px;

    &__title {
      text-align: center;
      padding-bottom: 23px;
      
      @include font(16px, 300, 19px, #000000)
    }

    &__button {
      width: 100%;
      height: 40px;
      border-radius: 2px;
      background: #FFFFFF;
      border: 1px solid #E0E0E0;

      align-items: center;
      text-align: center;
      letter-spacing: 0.05em;
      text-transform: uppercase;

      &--gmail {
        background: #EFEFEF;
        border: none;
      }

      &--facebook {
        background: #39569A;
        color: #FFFFFF;
        border: none;
      }

      &--vc {
        background: #5181B8;
        color: #FFFFFF;
        border: none;
      }

      &--icloud {
        background: #2196F3;
        color: #FFFFFF;
        border: none;
      }

      img {
        padding-right: 6px;
      }
      @include flex_center;
      @include font(9px, 600, 150%, #000000)
    }
  }


</style>