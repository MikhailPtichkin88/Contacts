# Contacts test project with login page

node version: 16.14.2

# Запуск приложения:

В терминале выполнить следующие команды:
### `yarn`
Для подгрузки пакетов
### `node server.js`
Для запуска  сервера
### `yarn start`
Для запуска самого приложения

## Функционал:

### 1. Страница логина:
Необходимо ввести любое имя и пароль более одного символа, на которые моковый сервер вернет токен. Токен сохраняется в session storage и будет активен, пока не закрыть вкладку. При наличии активного токена будет автоматический редирект на страницу с контактами. В противном случае - на страницу логина.
### 2. Страница контактов:
При переходе на страницу контактов происходит автоматический запрос на сервер на подгрузку 20 контактов.

##### Любое поле любого контакта можно изменить по **_двойному_** (!) **_клику мышкой_**

В начале списка находится форма для добавления нового контакта

В правом верхнем углу иконка для удаления контакта

Находящаяся в хэдере форма поиска ищет на сервере все совпадения в полях email и comment(на сервере это body) и выводит все контакты, удовлетворяющие запрос. При отсутствии результата выводится форма с уведомлением и с кнопкой для подгрузки дефолтных контактов.

=============================
* Во всех формах реализована базовая валидация
* Для улучшения визуализации и UX была использована библиотека Material-UI
* Выполнена адаптация под разные разрешения экрана (до 375px)
* Реализовано unit-тестирование
* Стек технологий: React, Redux, TypeScript, react-redux, Redux Thunk, Axios, react-router-dom (v6.3.0)





