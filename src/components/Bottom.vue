<template>
  <footer class="bottom__container page-footer">
    <div>© 2020 Trader-Oil. All rights reserved</div>
    <div class="bottom__regulations">
      <div>Правила использования</div>
      <div>Политика конфеденциальности</div>
    </div>
    <div class="bottom__made">Сделано в Affetta</div>
    <ButtonChat />
  </footer>
</template>

<script>
import ButtonChat from '@/components/ButtonChat'

export default {
  components: {
    ButtonChat,
  }
};
</script>

<style lang="scss" scoped>
  @import './src/assets/style/mixins';
  @import './src/assets/style/variables';

  .bottom {
    &__container {
      position: relative;
      // bottom: 0;
      width: 100%;
      padding-left: 47px;
      padding-right: 47px;
      padding-bottom: 15px;
      background: none;
      
      @include flex_between;
      @include font(13px, 300, 24px, #B1B1B1)
    }

    &__regulations {
      width: 369px;
      cursor: pointer;

      @include flex_between;
    }

    &__made {
      cursor: pointer;
    }
  }

</style>