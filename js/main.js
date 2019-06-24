Vue.component('js-accordion', {
  template: `
  <div class="js-accordion" v-cloak>
  <button class="js-accordion--trigger" type="button" :class="{ '_state-open': isOpened }" @click="accordionToggle()">
    <slot name="title"></slot>
  </button>
  <transition name="js-accordion" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
    <div class="js-accordion--target" :class="{ '_state-open': isOpened }" v-if="isOpened">
      <slot name="body"></slot>
    </div>
  </transition>
</div>
  `,

  data() {
    return {
      isOpened: false
    };
  },
  props: {

  },

  methods: {
    accordionToggle: function () {
      this.isOpened = !this.isOpened;
    },
    beforeEnter: function (el) {
      el.style.height = '0';
    },
    enter: function (el) {
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave: function (el) {
      el.style.height = el.scrollHeight + 'px';
    },
    leave: function (el) {
      el.style.height = '0';
    }
  }
});





new Vue({
  el: '#app'
});