## Вебсайт з Тудус

***

## Структура каталогів файлів:
>./src/app/page.tsx - [Головна сторінка сайту](http://localhost:3000)
>
>./src/app/todos/page.tsx - [Сторінка сайту з todos](http://localhost:3000/todos)
>
>./src/components/.tsx - В цій папці ми зберігаємо компоненти, які можемо використовувати багато разів у різних місцях проекту
>
>./src/lib/http.ts - Тут ми зберігаємо наші запити з сайту до сервера
>
>./src/types/ - Тут ми зберігаємо типи TypeScript
>
>./src/constants.ts - У цьому файлі ми зберігаємо labels
>
>./.prettier.js - Вказуємо правила форматування коду
>
>./.eslintrc.json  - Вказуємо правила перевірки коду
>

***

## Встановленні NPM пакети
* [next](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) був встановлен за допомогою [`npm create-next-app`]
* [typescript](https://www.npmjs.com/package/typescript) для контролю типізації
* [react](https://www.npmjs.com/package/react) для створення інтерактивних інтерфейсів.
* [react-icons](https://www.npmjs.com/package/react-icons) включає популярні іконки у ваші React-проекти
* [tailwindcss](https://www.npmjs.com/package/tailwindcss) CSS framework
* [prettier](https://www.npmjs.com/package/prettier) це форматер коду
* [eslint](https://www.npmjs.com/package/eslint) ESLint статично аналізує ваш код, щоб швидко знаходити проблеми

***

## Команди

1. Запускає сервер
```sh
	npm run dev 
```

2. Запускає ESlint для перевірки на помилки
```sh
	npm run lint 
```

3. Запускає Prettier для форматування коду
```sh
	npm run prettier 
```
