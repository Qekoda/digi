<template>
  <div class="filter">
    <ul class="list list--category">
      <li class="">
        <div class="list__item list__item--title list__item--space">
          <p>Категория</p>
          <p>3</p>
        </div>
        <ul class="list list--category">
          <li 
            class="list__item list__item--space list__item--subtitle"
            v-for="i in 3" :key="i"
          >
            <p>Название</p>
            {{ i }}
          </li>
        </ul>

      </li>
    </ul>

    <div class="filter__section">
      <div class="filter__title">
        Цена
      </div>
      <div class="filter__row">
        <app-search
          leftText="от"
        /> 
        <div class="filter__stick"></div>
        <app-search
          leftText="до"
        />
      </div>
    </div>
    
    <div class="filter__section">
      <div class="filter__title filter__title--space">
        <p>
          Бренд
        </p>
        <p class="filter__clear">
          Очистить
        </p>
      </div>
      <app-autocomplete>
        <template #list>
          <li 
            class="list__item list__item--space"
            v-for="i in 3" :key="i"
          >
            <app-checkbox 
              label="Атрибут"
            />
            <div>{{ i }}</div>
          </li>
        </template>
      </app-autocomplete>
    </div>

    <div class="filter__section">
      <div class="filter__title">
        Размер
      </div>
      <ul class="list">
        <li 
          class="list__item list__item--space"
          v-for="i in 8" :key="i"
        >
          <app-checkbox label="Размер"/>
          <p>{{ i }}</p>
        </li>
      </ul>
    </div>

    
  </div>
</template>

<script>
import AppCheckbox from '@/components/AppCheckbox.vue';
import AppAutocomplete from '@/components/AppAutocomplete.vue';
import AppSearch from '@/components/AppSearch.vue';

export default {
  components: {
    AppCheckbox,
    AppAutocomplete,
    AppSearch
  }
}
</script>