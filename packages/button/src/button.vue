
<template>
  <button
    @click="$emit('click')"
    class="i__button"
    :disabled="disabled"
    :class="[
    'i__button--'+type,
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round},
    'i__button--size-'+size
    ]"
  >
    <i v-if="icon !== ''" :class="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
  export default{
    name: 'IButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      },
      icon: {
        type: String,
        default: ''
      },
      plain: Boolean,
      disabled: Boolean,
      round: Boolean
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>
