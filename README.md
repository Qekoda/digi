# Тестовое задание для компании Diginetica

### 1. Написать функцию для получения списка всех артикулов товаров в консоли браузера на странице [Ссылка на страницу](https://groupprice.ru/categories/jenskaya-odejda?referer_from=main_catalog)

**Решение:**
```js
let productList = document.querySelectorAll('._product')
let result = Array.from(productList).map((product) => {
	return product.getAttribute('data-product-mini-card')
})

result//вывести результат
```
---
### 2. Написать функцию для получения всех характеристики товара в консоли браузера в виде объекта в формате attributeName: value на странице [Ссылка на страницу](https://nir-vanna.ru/product/smesitel-bravat-art-f175109c-dlya-rakoviny/)

**Решение:**
```js
let additionalBlock = document.querySelector('.tab-pane-product-parameters-main .additional')
let parametersArr = Array.from(additionalBlock.querySelectorAll('.tab-pane-product-parameter-item'))

const result = parametersArr.reduce((acc, param) => {
	key = param.querySelector('.parameter-name').firstChild.textContent.trim()
	value = param.querySelector('.parameter-value').firstChild.textContent.trim()
	if (key && value) {
		acc[key] = value
	} else console.log(key, value)
	return acc
}, {})

result//вывести результат
```
---
### 3. Вёрстка
[Ссылка на макет](https://www.figma.com/file/uBaU2XAC6gZqtshk59mMHL)
Задание: необходимо сверстать данный макет. 
Оцениваться будет соответствие макету и модульность. 

## Зависимости
node v20.16.0

## Установка

```
npm install
```

## Запуск

```
npm run serve
```