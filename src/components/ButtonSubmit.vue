<template>
  <button class="button-submit" type="submit" name="action">
    Войти
  </button>
</template>

<style lang="scss" scoped>
  @import './src/assets/style/mixins';
  @import './src/assets/style/variables';

  .button-submit {
    background: linear-gradient(107.75deg, #72AF32 0%, #4B9B3F 100%), linear-gradient(76.59deg, #6C9E39 1.93%, #79B041 98.89%);
    border-radius: 2px;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
    padding: 20px 0;

    @include font(13px, 600, 16px, #FFFFFF)
  }

</style>