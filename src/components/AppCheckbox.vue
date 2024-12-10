<template>
  <div class="checkbox-group">
    <input
      class="checkbox-group__checkbox"
      type="checkbox"
    >
    <label 
      class="checkbox-group__label label"
      :class="{'label--required': required}"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>