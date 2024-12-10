<template>
  <div 
    class="search"
    :class="{
      'search--header': header,
      'search__left-icon': leftIcon
    }"
    @click="handleClick"
    >
    <!-- <div 
      class="search__left-icon"
      v-if="leftIcon"
    ></div> -->
    <p 
      class="search__left-text"
      v-if="leftText"
    >
      {{ leftText }}
    </p>
    <input 
      class="search__input" 
      type="text" 
      :placeholder="placeholder"
      ref="input"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <img
      v-if="modelValue && clearable"
      class="search__clear-icon"
      height="24px" 
      width="24px" 
      src="@/assets/images/clear.svg" 
      alt="clear"
      @click="clearSearch"
    >
    <button 
      v-if="header"
      class="search__find-btn btn btn--primary-filled"
    >
      Найти
    </button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Поиск'
    },
    header: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: Boolean,
      default: false
    },
    leftText: {
      type: String
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  data() {
    return {
      searchValue: ''
    }
  },
  computed: {
    iconPath() {
      return require(`@/assets/images/${this.leftIcon}.svg`)
    }
  },
  methods: {
    handleClick() {
      this.$nextTick(() => this.$refs.input.focus())
    },
    clearSearch() {
      this.$emit('update:modelValue', '')
    },
  }
}
</script>