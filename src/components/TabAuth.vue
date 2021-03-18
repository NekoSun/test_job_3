<template>
  <div>
    <div class="tab">
      <button class="tab__enter">Вход</button>
      <button class="tab__registration">Регистрация</button>
    </div>
    <div class="tab__content">
      <Registration />
      <div
        v-if="inputField"
      >
        <Login 
          @click="inputField=false"
        />
      </div>
      <div
        v-else
      >
        <ForgotPassword />
      </div>
    </div>
  </div>
</template>

<script>
import Registration from '@/components/Registration'
import Login from '@/components/Login'
import ForgotPassword from '@/components/ForgotPassword'

export default {
  components: {
    Registration,
    Login,
    ForgotPassword
  },
  data() {
    return {
      inputField: true,
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
@import './src/assets/style/mixins';
@import './src/assets/style/variables';
  .tab {
    text-align: center;
    text-transform: uppercase;
    display: flex;

    &__content {
      margin-top: -16px;
    }

    &__enter {
      width: 100%;
      background: #FFFFFF;
      border-radius: 4px;
      color: #72AF32;
      padding-top: 20px;
      padding-bottom: 24px;
    }

    &__registration {
      width: 100%;
      background: #FAFAFA;
      border: 1px solid #E8E8E8;
      box-sizing: border-box;
      border-radius: 4px;
      color: #B1B1B1;
      padding-top: 20px;
      padding-bottom: 24px;
    }

    @include font(11px, 600, 13px)
  }
</style>
