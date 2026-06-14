# Портфолио Никиты Сквирского

Персональный сайт-портфолио фронтенд-разработчика. Проект собирается на Vue 3, TypeScript и Vite, а структура кода организована по принципам Feature-Sliced Design.

Визуальная база вдохновлена минималистичным макетом Henry Personal Portfolio: темный фон, крупная типографика, красный hero-блок, строгая сетка и акцент на кейсах.

## Стек

- Vue 3
- TypeScript в strict-режиме
- Vite
- Feature-Sliced Design
- CSS custom properties для дизайн-токенов
- Локальные шрифты Onest, Inter и Inter Tight

## Быстрый старт

```bash
npm install
npm run dev
```

Локальный сервер по умолчанию запускается на:

```text
http://localhost:5173
```

## Скрипты

```bash
npm run dev
```

Запускает dev-сервер Vite.

```bash
npm run build
```

Проверяет TypeScript через `vue-tsc` и собирает production-бандл.

```bash
npm run preview
```

Запускает локальный preview production-сборки.

## Структура проекта

```text
src/
  app/          глобальные стили, токены, подключение шрифтов
  pages/        страницы приложения
  widgets/      крупные секции страницы: hero, about, projects, skills, experience, contact
  entities/     типизированные данные профиля, проектов, навыков, опыта и социальных ссылок
  shared/       общие UI-компоненты, ассеты, конфиги и типы
```

Основная страница собирается в `src/pages/ui/HomePage.vue`.

## Где менять контент

Профиль:

```text
src/entities/profile/model/data.ts
```

Проекты:

```text
src/entities/project/model/data.ts
```

Навыки:

```text
src/entities/skill/model/data.ts
```

Опыт:

```text
src/entities/experience/model/data.ts
```

Социальные ссылки:

```text
src/entities/social-link/model/data.ts
```

Общие настройки сайта:

```text
src/shared/config/site.config.ts
```

## Стили и дизайн-токены

Глобальные стили лежат в:

```text
src/app/styles/
```

Основные файлы:

- `tokens.css` - цвета, контейнеры, отступы, радиусы и базовые размеры секций.
- `fonts.css` - локальное подключение шрифтов.
- `global.css` - базовые стили страницы.

Общие UI-примитивы лежат в:

```text
src/shared/ui/
```

Сейчас там есть `Button`, `Badge`, `Card` и `Container`.

## Ассеты

Фото профиля:

```text
src/shared/assets/images/profile/profile.jpg
```

Локальные шрифты:

```text
src/shared/assets/fonts/
```

Референсы макета:

```text
src/shared/assets/references/behance/
```

## Переменные окружения

Можно переопределить адрес сайта и контактный email:

```env
VITE_SITE_URL=https://example.com
VITE_CONTACT_EMAIL=mail@example.com
```

## Проверка перед деплоем

```bash
npm run build
```

После успешной сборки результат будет в папке `dist/`.
