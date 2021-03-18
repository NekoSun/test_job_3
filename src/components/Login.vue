<template>
  <form class="card card__auth" @submit.prevent="submitHandler">
    <div class="card__content">
      <div class="input-field">
        <input 
          id="email" 
          type="text"
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label for="email"><span>E-mail</span><img src="@/assets/img/ico-tooltip.svg" alt="" v-tooltip="'E-mailE-mail'"></label>
      </div>
      <div class="input-field">
        <input 
          id="password" 
          type="text"
          v-model.trim="password"
          v-show="showPass"
          :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.password)}"
        >
        <label for="password"><span>Password</span><img src="@/assets/img/ico-tooltip.svg" alt="" v-tooltip="'PasswordPassword'"></label>
      </div>  
      <div class="card__content--checkbox">
        <label>
          <input type="checkbox" />
          <span class="checkbox">Запомнить меня</span>
        </label>
        <a @click="$emit('click')">Забыли пароль?</a>
      </div>
      <ButtonSubmit />
      <AnotherRegistration />
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators"
import ButtonSubmit from '@/components/ButtonSubmit'
import AnotherRegistration from '@/components/AnotherRegistration'


export default {
  components: {
    ButtonSubmit,
    AnotherRegistration
  },
  data() {
    return {
      email: '',
      password: '',
      showPass: true
    }
  },
  validations: {
    email: {email , required},
    password: {required, minLength: minLength(6)},
  },
  methods: {
    submitHandler() {
    },
  },
};
</script>
<style lang="scss" scoped>
  @import './src/assets/style/mixins';
  @import './src/assets/style/variables';

  .card {
    &__content {
      padding: 33px 45px;

      &--checkbox {
        padding-top: 23px;
        padding-bottom: 30px;

        a {
          border-bottom: solid 1px #E0E0E0;

          @include font(12px, 300, 24px)
        }

        @include flex_between;
      }
    }

    .active {
      transform: translateY(0px) scale(0.8) !important;
      transform-origin: 0 0;
      color: #828282 !important;
      @include font(10px, 300, 13px)
    }
  }

  [type="checkbox"] + span:not(.lever)::before {
    background: #FFFFFF;
    border: 1px solid #E9E9E9;
    box-sizing: border-box;
    border-radius: 2px;
  }

  [type="checkbox"]:checked + span:not(.lever)::before {
    top: -4px;
    left: -5px;
    width: 12px;
    height: 22px;
    border-top: 2px solid transparent;
    border-left: 2px solid transparent;
    border-right: 2px solid #26a69a;
    border-bottom: 2px solid #26a69a;
    transform: rotate(40deg);
    backface-visibility: hidden;
    transform-origin: 100% 100%;
  }

  .input {
    &-field {
      padding-left: 12px;
      background: #FFFFFF;
      border: 1px solid #E0E0E0;
      box-sizing: border-box;
      border-radius: 2px;
      margin-top: 0;

      // width: 340px;
      height: 64px;

      &:first-child {
        padding-bottom: 20px;
      }

      input {
        border: none;
        padding: 0;
        margin: 0;
        margin-top: 25px;
        @include font(14px, 250, 24px, #000000)
      }

      input[type="text"]:not(.browser-default):focus:not([readonly]) {
        border-bottom: none;
        box-shadow: none;
      }

      label {
        margin-left: 12px;
        margin-top: 7px;

        img {
          padding-left: 6px;
        }
        @include flex_center;
        @include font(14px, 250, 24px, #000000)
      }
    }
  }

  .checkbox {
    @include font(12px, 300, 17px, #000000)
  }

</style>

<style lang="scss">
  .tab__content {
    .card {
      border-radius: 4px;
      box-shadow: none;
    }
  }

</style>

