<template>
  <div class="container">
    <div class="view">
      <app-header class="view__header" />
      <main class="view__main">
        <filters class="view__aside"/>
        <section class="view__content product">
          <card 
            :isAvailable="false"
          />
          <card v-for="i in 11" :key="i"/>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '../partials/AppHeader.vue'
import Filters from '../partials/AppFilters.vue'
import Card from '@/components/AppCard.vue'

export default {
  components: {
    AppHeader,
    Card, 
    Filters
  }
}
</script>