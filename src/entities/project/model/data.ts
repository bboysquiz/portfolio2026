import type { Project } from './types'
import opshubCoverImage from '@shared/assets/images/cases/opshub-cover.jpg'
import selenaCrmCoverImage from '@shared/assets/images/cases/selena-crm-cover.jpg'
import interviewerCoverImage from '@shared/assets/images/cases/interviewer-cover.jpg'
import visionAirCoverImage from '@shared/assets/images/cases/vision-air-cover.jpg'

export const projects: Project[] = [
  {
    id: 'selena-crm',
    title: 'CRM для школы танцев',
    previewTitleLines: ['CRM для', 'школы танцев'],
    coverImage: selenaCrmCoverImage,
    description:
      'CRM-приложение для танцевальной школы: учет посещаемости, расписание занятий, группы, направления, филиалы, бухгалтерия, ролевая модель, полное логирование, база данных учеников.',
    fullDescription:
      'CRM для школы танцев - проект для автоматизации работы танцевальной школы. Основная идея проекта - закрыть максимум потребностей школ танцев с помощью автоматизации и хранения данных. На данный момент проект позволяет вести учёт учеников в разных филиалах школы, создавать танцевальные направления и группы, создавать аккаунты преподавателей и администраторов и связывать их с филиалами, направлениями и группами, создавать расписание и следить за ним, вести учёт посещаемости, статистику и автоматический расчёт зарплат сотрудникам, а также полное логирование событий, происходящих в проекте. В дальнейшем проект планируется расширять и сделать не только системой для сотрудников, но и танцевальной социальной сетью для всех клиентов школы танцев, упрощая взаимодействие между учениками и преподавателями, а также отслеживание прогресса и результатов учеников и многое другое.',
    category: 'CRM-система',
    status: 'published',
    stack: [
      'Vue 3',
      'Quasar',
      'TypeScript',
      'Vite',
      'Pinia',
      'SCSS',
      'ESLint',
      'Prettier',
    ],
    image: '/images/projects/selena-crm.webp',
    videoUrl: null,
    links: {
      github: {
        label: 'GitHub',
        href: 'https://github.com/bboysquiz/SelenaCRM',
        isExternal: true,
      },
      live: {
        label: 'Сайт',
        href: 'http://5.42.126.68/',
        isExternal: true,
      },
      demo: undefined,
    },
  },
  {
    id: 'opshub',
    title: 'OpsHub',
    coverImage: opshubCoverImage,
    description:
      'Платформа для внутренних операционных процессов: тикеты, база знаний, аналитика и единый интерфейс для работы команды.',
    fullDescription:
      'OpsHub - это архитектурно сложный, с точки зрения фронтенда, проект в формате монорепозитория. Приложение построено вокруг главного приложения и отдельных remote-модулей: тикеты, база знаний и аналитика вынесены в независимые части интерфейса. Здесь продемонстрированна работа с микрофронтенд-архитектурой, офлайн логикой, различными видами кэширования, ролевой моделью, уведомлениями и темизацией. Цель данного проекта: сделать личный таскменеджер, при этом демонстрируя различные навыки. Подробнее о проекте можно почитать на сайте OpsHub в разделе "О проекте"',
    category: 'Таск-менеджер',
    status: 'published',
    stack: [
      'Nuxt',
      'Vue 3',
      'TypeScript',
      'Vite',
      'Pinia',
      'Quasar',
      'Микрофронтенд-архитектура "Module Federation"',
      'Dexie',
      'GSAP',
      'Docker',
      'Vitest',
      'ESLint',
      'Prettier',
    ],
    image: '/images/projects/opshub.webp',
    videoUrl: null,
    links: {
      github: {
        label: 'GitHub',
        href: 'https://github.com/bboysquiz/opshub',
        isExternal: true,
      },
      live: {
        label: 'Сайт',
        href: 'https://opshub-shell.netlify.app/',
        isExternal: true,
      },
      demo: undefined,
    },
  },
  {
    id: 'interviewer',
    title: 'Interviewer',
    coverImage: interviewerCoverImage,
    description:
      'Приложение для подготовки к интервью: заметки, темы, анализ скриншотов с помощью Gemini и Groq, OCR-поиск, генерация вопросов на основании проанализированных заметок с помощью Gemini и Groq, история и статистика тренировок.',
    fullDescription:
      'Interviewer - личное приложение для подготовки к техническим собеседованиям. На протяжении своего пути в программировании пользователь может создавать различные темы и добавлять туда заметки с новой информацией. Если информация является скриншотом, его анализирует Groq или Gemini и сохраняет контекст в БД, а затем пользователь может пройти собеседование, где ему будут задавать вопросы на основе его базы знаний. Нейросеть анализирует ответы пользователя с точки зрения его базы знаний и с точки зрения знаний самой нейросети по этой теме, выставляет ему две оценки с двух разных точек зрения, а также пишет, что было хорошо в ответе и что нужно улучшить.',
    category: 'Портативный интервьюер',
    status: 'published',
    stack: [
      'Vue 3',
      'TypeScript',
      'Vite',
      'Pinia',
      'CSS',
    ],
    image: '/images/projects/interviewer.webp',
    videoUrl: null,
    links: {
      github: {
        label: 'GitHub',
        href: 'https://github.com/bboysquiz/interviewer',
        isExternal: true,
      },
      live: {
        label: 'Сайт',
        href: 'https://interviewer-squiz.amvera.io/',
        isExternal: true,
      },
      demo: undefined,
    },
  },

  {
    id: 'vision-air',
    title: 'Vision AIR',
    coverImage: visionAirCoverImage,
    description:
      'Проект для сервиса ИИ-подписок: каталог товаров, подборки, поиск, корзина, избранное, заказы и пользовательский сценарий покупки.',
    fullDescription:
      'Vision AIR - интернет магазин ИИ-инструментов и подписок. Проект включает витрину товаров, горячие подборки, поиск по подпискам, карточки продуктов, корзину, избранное, заказы, регистрацию и авторизацию.',
    category: 'Интернет магазин',
    status: 'published',
    stack: [
      'Vue 3',
      'Nuxt',
      'TypeScript',
      'Vite',
      'Pinia',
      'CSS',
      'FSD',
      'Prettier',
      'ESLint',
    ],
    image: '/images/projects/vision-air.webp',
    videoUrl: null,
    links: {
      github: {
        label: 'GitHub',
        href: 'https://github.com/bboysquiz/VisionAI-Frontend',
        isExternal: true,
      },
      live: {
        label: 'Сайт',
        href: 'https://visionairproject.netlify.app/',
        isExternal: true,
      },
      demo: undefined,
    },
  },

  // {
  //   id: 'breaking-tracker',
  //   title: 'Трекер прогресса в брейкинге',
  //   description:
  //     'Планируемое приложение для брейкеров: постановка целей, задачи на тренировки, отслеживание активности, прогресса и результатов.',
  //   fullDescription:
  //     'Трекер прогресса в брейкинге - будущий проект для системного отслеживания прогресса в брейкинге. Идея приложения - помочь танцору ставить цели, планировать тренировки, фиксировать активность, отслеживать результаты, видеть динамику развития и работать над конкретными элементами. Проект будет построен вокруг GraphQL API и фронтенд-клиента на Vue Apollo.',
  //   category: 'Спорт-трекер',
  //   status: 'planned',
  //   stack: [
  //     'Vue 3',
  //     'TypeScript',
  //     'Vue Apollo',
  //     'GraphQL',
  //     'Pinia',
  //     'Vite',
  //     'Графики',
  //     'Календарный UI',
  //   ],
  //   image: '/images/projects/breaking-tracker.webp',
  //   videoUrl: null,
  //   links: {
  //     github: undefined,
  //     live: undefined,
  //     demo: undefined,
  //   },
  // },
]
