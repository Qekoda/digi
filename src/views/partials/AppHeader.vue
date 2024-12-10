<template>
  <header class="header">
    <div class="header__left-part">
      <router-link class="header__logo" to="/"> 
        <img width="24px" height="24px" src="@/assets/images/logo.svg" alt="logo"></img>
        <p class="header__logo-text">Логотип</p>
      </router-link>
      <button
        class="btn btn--lg"
        type="button"
      >
        Каталог
      </button>
    </div>

    <app-search 
      class="header__search" 
      placeholder="Поиск по 100 000 товаров"
      v-model="inputValue"
      header
      leftIcon
      clearable
    />

    <nav class="header__nav">
      <router-link class="header__link" to="/">Информация о компании</router-link>
      <router-link class="header__link" to="/">История</router-link>
      <router-link class="header__link" to="/">Полезные ссылки</router-link>
    </nav>
  </header>
</template>

<script>
import AppSearch from '@/components/AppSearch.vue'

export default {
  components: {
    AppSearch
  },
  data() {
    return{
      inputValue: ''
    }
  }

  
}
</script>