<template>
  <form class="card card__auth" @submit.prevent="submitHandler">
    <div class="card__content">
      <h2 class="card__content--h2">Введите код</h2>
      <div class="input-field__wrapper">
        <div class="input-field"  v-for="(val, i) in cods" :key="i">
          <input
            type="text"
            v-model.trim="cods[i]"
            @input="onInput"
          >
        </div>
      </div>
      <div class="dop-links">
        <div class="timer__wrapper">
          <div class="timer">Через {{ seconds }} сек</div>
          <a class="timer__links">Отправить ещё</a>
        </div>
        <div class="no-sms">
          <a class="timer">Изменить номер</a>
          <a class="timer__links">Не приходит СМС?</a>
        </div>
      </div>
      <AnotherRegistration />
    </div>
  </form>
</template>

<script>
import AnotherRegistration from '@/components/AnotherRegistration'
let $moment = require('moment')

export default {
  components: {
    AnotherRegistration
  },
  data() {
    return {
      cods: Array(4).fill(''),
      seconds: 0,
      actualTime: $moment().format('X'),
    }
  },
  watch: {
    actualTime() {
      this.compute()
    },
  },
   mounted() {
    this.compute()
    this.addOneSecondToActualTimeEverySecond()
  },
  methods: {
    onInput({ target }) {
      const  val = target.value
      const newVal = `${Math.min(9, Math.max(0, val.slice(-1) | 0))}`;

      if (val !== newVal) {
        target.value = newVal;
        target.dispatchEvent(new Event('input'));
      }
    },
    addOneSecondToActualTimeEverySecond() {
      var component = this
      component.actualTime = $moment().format('X')
      setTimeout(function() {
        component.addOneSecondToActualTimeEverySecond()
      }, 1000)
    },
    getDiffInSeconds() {
      let lastTime = 60
      return this.actualTime - $moment(lastTime).format('X')
    },
    compute() {
      let duration = $moment.duration(this.getDiffInSeconds(), 'seconds')
      this.seconds = duration.seconds() > 0 ? duration.seconds() : 0
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

      &--h2 {
        text-align: center;
        padding-bottom: 30px;

        @include font(21px, 300, 25px, #000000)
      }
    }

    .active {
      transform: translateY(0px) scale(0.8) !important;
      transform-origin: 0 0;
      color: #828282 !important;
      @include font(10px, 300, 13px)
    }
  }

  .input {
    &-field {

      &__wrapper {
        @include flex_between;
      }
      
      input {
        border: none;
        padding: 0;
        margin: 0;

        text-align: center;

        background: #FFFFFF;
        border: 1px solid #E0E0E0;
        box-sizing: border-box;
        border-radius: 2px;
  
        width: 65px;
        height: 56px;

        @include font(24px, 250, 24px, #000000)
      }

      input[type="text"]:not(.browser-default):focus:not([readonly]) {
        border-bottom: #E0E0E0;
        box-shadow: 0 1px 0 0 #E0E0E0;
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

  .dop-links {
    padding-top: 30px;

    @include flex_between;
  }
  .timer__wrapper {
    display: flex;
    flex-direction: column;

    .timer {
      margin-bottom: 6px;

      &__links {
        border-bottom: solid 1px #E0E0E0;
      }
    }

    @include font(12px, 300, 14px)
  }

  .no-sms {
    display: flex;
    flex-direction: column;

    .timer {
      margin-bottom: 6px;
    }

    .timer, .timer__links {
      border-bottom: solid 1px #E0E0E0;
      color: #000000;
    }

    @include font(12px, 300, 14px, #000000)
  }

</style>

