<template>
  <div class="autocomplete">
    <app-search 
      leftIcon
      clearable
    />
    <ul 
      class="autocomplete__list list"
    >
      <slot name="list"></slot>
    </ul>
  </div>
</template>

<script>
import AppSearch from './AppSearch.vue'

export default {
  components: {
    AppSearch
  }
}
</script>