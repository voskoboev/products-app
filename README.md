# Приложение для просмотра товаров

### Технологии:
HTML5, SCSS, TS, Vue 2 (composition), Vue Router, Vuex

### Условия:

Средствами Vue.js реализуйте небольшое SPA приложение для просмотра товаров.

Приложение состоит из 3 страниц:

- Главная (каталог).
- Страница товара.
- Избранное.

Шапка сайта содержит навигацию по страницам, кнопку перехода в список избранного. Кнопка избранного должна содержать счётчик количества добавленных в него товаров.

#### Главная

На главной странице выводятся карточки с товарами, дающими минимальную информацию о продукте: название, цена, изображение.
Возможные действия: перейти на страницу товара нажатием на соответствующую карточку, добавить товар в избранное.

#### Страница товара

Выводит более подробную информацию о товаре: название, цена, изображение, описание.
Возможные действия: добавить товар в избранное.

#### Избранное

Отображает товары, добавленные в данный список. При отсутствии таковых выводит заглушку с сообщением.

Требования:

- Все действия на сайте должны происходить без перезагрузки страницы.
- В качестве сборщика используйте Webpack.
- Навигацию между страницами выполнить с использованием vue-router.
- Верстка должна быть выполнена без использования UI библиотек.
- Данные для товаров иоспользовать из fakestore: https://fakestoreapi.com/products

### Команды для запуска:
- npm install
- npm run serve
- npm run build

