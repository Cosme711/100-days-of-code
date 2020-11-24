<template>
<transition name="fade">
    <div v-if="show">
      <slot></slot>
    </div>
</transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    overflow: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show() {
      if (this.overflow) document.body.style.overflow = this.show ? 'hidden' : 'visible'
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>
