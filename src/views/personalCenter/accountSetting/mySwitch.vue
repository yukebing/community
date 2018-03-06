<template>
  <label class="mint-switch">
    <input class="mint-switch-input" :disabled="disabled" @change="$emit('change', currentValue)" type="checkbox" v-model="currentValue">
    <span class="mint-switch-core"></span>
    <div class="mint-switch-label"><slot></slot></div>
  </label>
</template>

<script>

export default {
  name: 'my-switch',

  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    }
  }
};
</script>

<style scoped>
  .mint-switch-core {
      height: 0.55rem;
  }
  .mint-switch-core:before {
     height: 0.5rem; 
  }
  .mint-switch-core:after {
     height: 0.5rem;
  }
</style>
