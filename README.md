# Tourism Krasnodar

Адаптивный многоязычный сайт-визитка туристического направления Краснодара.  
Проект рассказывает о городе, популярных достопримечательностях и ближайших событиях, а также позволяет подписаться на обновления.

## О проекте

`tourism-krasnodar` — это одностраничный лендинг с поддержкой двух языков (RU/EN).  
Контент разбит на логические секции, а тексты вынесены в отдельные файлы переводов.  
Страницы генерируются статически на этапе сборки, что обеспечивает быструю загрузку и хорошую SEO-основу.

## Функционал

- **Навигация по разделам** — верхнее меню с якорными ссылками.
- **Переключение языка RU/EN** — смена локали через маршрутизацию, без перезагрузки страницы.
- **Главный экран (Hero Section)** — заголовок, краткое описание города и кнопки призыва к действию.
- **Популярные достопримечательности** — карточки с изображением, названием, описанием и ссылкой «Подробнее».
- **Блок «Почему стоит посетить Краснодар?»** — ключевые преимущества города: климат, культура, кухня.
- **Афиша событий** — список ближайших мероприятий с датой, заголовком и описанием.
- **Форма подписки** — ввод email для получения уведомлений о новых турах и событиях.
- **Мультиязычность (i18n)** — тексты хранятся в JSON-файлах для русского и английского языков.
- **Статическая генерация** — страницы для обеих локалей собираются заранее.
- **Контейнеризация** — предусмотрен `Dockerfile` для запуска приложения в Docker.

## Стек технологий

- **Next.js 15 (App Router)** — фреймворк для React-приложения, маршрутизация и статическая генерация.
- **React 19** — библиотека для построения пользовательского интерфейса.
- **TypeScript** — типизация JavaScript-кода.
- **Tailwind CSS** — утилитарная стилизация интерфейса.
- **next-intl** — интернационализация: локали, переводы, маршрутизация.
- **ESLint** — статический анализ и поддержание единого стиля кода.
- **Docker** — сборка и запуск приложения в контейнере.

## Примерная структура проекта

```text
.
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── ...
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── Attractions/
│   ├── Events/
│   └── Subscribe/
├── messages/
│   ├── ru.json
│   └── en.json
├── public/
├── Dockerfile
├── package.json
└── ...


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
