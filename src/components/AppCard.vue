<template>
  <div class="card">
    <div 
      class="card__image"
      :class="{'card__image--sold-out': !isAvailable}"
    >
      <div class="card__badge card__badge--hit">Хит продаж</div>
      <div class="card__badge card__badge--discount">25%</div>
    </div>
    <div class="card__info">
      <div class="card__brand">
        Бренд
      </div>
      <div class="card__description">
        Полное название товара в несколько строк для вида с обрывом в конце вот так вот, полное название читай в профиле Полное название товара в несколько строк для вида с обрывом в конце вот так вот, полное название читай в профиле
      </div>
    </div>
    <div
      v-if="isAvailable"
      class="card__price-block"
    >
      <div class="card__new-price">
        5 990 ₽
      </div>
      <div class="card__old-price">5 990 ₽</div>
    </div>
    <button
      type="button"
      class="btn"
      :class="{
        'btn--primary': isAvailable,
        'btn--sold-out': !isAvailable,
      }"
    >
      {{ isAvailable ? 'Купить' : 'Сообщить о поступлении' }}
    </button>
  </div>
</template>

<script>

export default {
  props: {
    isAvailable: {
      type: Boolean,
      default: true,
    },
  }
}
</script>