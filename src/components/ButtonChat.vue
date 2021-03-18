<template>
  <div class="button-chat__container">
    <div class="button-chat__avatar">
      <img src="@/assets/img/ava.jpg" alt="avatar">
    </div>
    <div class="button-chat__text">
      <span>У ВАС есть ВОПРОСЫ?</span>
      <span>Мы вам поможем</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import './src/assets/style/mixins';
  @import './src/assets/style/variables';

  .button-chat {
    &__container {
      display: flex;
      position: absolute;
      bottom: 65px;
      width: 362px;
      height: 90px;

      background: #FFFFFF;
      box-shadow: 0px 4px 10px rgba(221, 222, 222, 0.5);
      border-radius: 100px;

       &:before {
        position: absolute;
        content: '';
        right: 33px;
        bottom: -36px;
        border: 20px solid transparent; border-top: 20px solid #FFFFFF;
      }
    }

    &__avatar {
      width: 68px;
      height: 68px;
      padding-top: 11px;
      margin-left: 11px;
      img {
        background: #ECECEC;
        border-radius: 100px;
      }
    }

    &__text {
      padding-left: 23px;
      span:first-child {
        text-transform: uppercase;
        @include font(16px, 300, 19px, #141414)
      }
      span:last-child {
        @include font(13px, 250, 21px, #141414)
      }
      @include flex_column;
    }

  }

</style>