# kr2-bootstrap-shop

Контрольная работа №2 по дисциплине «Фронтенд и бэкенд разработка».

Тема: «CSS-фреймворки: разработка интерфейса на Bootstrap или альтернативном CSS-фреймворке».

Сайт интернет-магазина кофе «Зерно», сделанный на Bootstrap. Предметная область та же, что в КР №1, но вёрстка написана заново на компонентах Bootstrap.

GitHub Pages: https://kikimor0607.github.io/kr2-bootstrap-shop/

## Фреймворк и подключение

Bootstrap 5.3.8, подключён локально (без CDN), файлы лежат в `vendor/bootstrap/`:

- `vendor/bootstrap/css/bootstrap.min.css` подключается в `head`;
- `vendor/bootstrap/js/bootstrap.bundle.min.js` подключается в конце `body`, он нужен для меню на телефоне, модального окна, аккордеона, карусели, вкладок и toast.

`css/custom.css` подключается после Bootstrap, чтобы можно было переопределить его стили.

## Структура

```text
kr2-bootstrap-shop/
├── index.html      главная
├── catalog.html    каталог
├── product.html    страница товара
├── order.html      оформление заказа
├── contacts.html   контакты (дополнительно)
├── css/custom.css
├── js/main.js      проверка форм и toast
├── images/
├── vendor/bootstrap/
├── README.md
└── .gitignore
```

## Что использовано из Bootstrap

- сетка: `container`, `row`, `col-12`, `col-md-*`, `col-lg-*`, отступы `g-*`;
- `navbar`, `card`, `btn`, `badge`, `alert`, `modal`;
- формы: `form-control`, `form-select`, `input-group`, `form-check`;
- `accordion` (вопросы на странице заказа);
- дополнительно: `carousel` (фото товара), `tabs`, `toast`, `pagination`, `breadcrumb`, `collapse`, `list-group`, `table`.

## Что добавлено сверх задания

- Bootstrap подключён локально;
- страница контактов с формой обратной связи;
- в каталоге фильтры (на телефоне сворачиваются), сортировка, пагинация;
- у карточек бейджи, старая цена у скидки, товар «нет в наличии»;
- на странице товара галерея, выбор веса и вкладки с характеристиками;
- формы проверяются перед отправкой и показывают сообщение об успешной отправке;
- цвета проекта заданы в `custom.css` через переменные Bootstrap.

## Как запустить

Открыть ссылку GitHub Pages или скачать репозиторий и открыть `index.html` в браузере. Интернет не нужен, Bootstrap лежит в проекте.

Фото товаров взяты с [Unsplash](https://unsplash.com/license).

## Автор

Бачинский Даниэль Денисович, ЭФБО-06-25
