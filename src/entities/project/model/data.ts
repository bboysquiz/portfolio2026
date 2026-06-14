import type { Project } from './types'
import opshubCoverImage from '@shared/assets/images/cases/opshub-cover.jpg'
import opshubCoverImage1226To901 from '@shared/assets/images/cases/opshub-cover_1226-901.jpg'
import opshubCoverImage900To561 from '@shared/assets/images/cases/opshub-cover_900-561.jpg'
import opshubCoverImage560To375 from '@shared/assets/images/cases/opshub-cover_560-375.jpg'
import selenaCrmCoverImage from '@shared/assets/images/cases/selena-crm-cover.jpg'
import selenaCrmCoverImage1226To901 from '@shared/assets/images/cases/selena-crm-cover_1226-901.jpg'
import selenaCrmCoverImage900To561 from '@shared/assets/images/cases/selena-crm-cover_900-561.jpg'
import selenaCrmCoverImage560To375 from '@shared/assets/images/cases/selena-crm-cover_560-375.jpg'
import interviewerCoverImage from '@shared/assets/images/cases/interviewer-cover.jpg'
import interviewerCoverImage1226To901 from '@shared/assets/images/cases/interviewer-cover_1226-901.jpg'
import interviewerCoverImage900To561 from '@shared/assets/images/cases/interviewer-cover_900-561.jpg'
import interviewerCoverImage560To375 from '@shared/assets/images/cases/interviewer-cover_560-375.jpg'
import visionAirCoverImage from '@shared/assets/images/cases/vision-air-cover.jpg'
import visionAirCoverImage1226To901 from '@shared/assets/images/cases/vision-air-cover_1226-901.jpg'
import visionAirCoverImage900To561 from '@shared/assets/images/cases/vision-air-cover_900-561.jpg'
import visionAirCoverImage560To375 from '@shared/assets/images/cases/vision-air-cover_560-375.jpg'
import crmDetailUser from '@shared/assets/images/cases/paralax/crm-detail-1.png'
import crmDetailDance from '@shared/assets/images/cases/paralax/crm-detail-2.png'
import crmDetailSubscription from '@shared/assets/images/cases/paralax/crm-detail-3.png'
import crmDetailAccount from '@shared/assets/images/cases/paralax/crm-detail-4.png'
import opshubDetailWork from '@shared/assets/images/cases/paralax/opshub-detail-1.png'
import opshubDetailResolved from '@shared/assets/images/cases/paralax/opshub-detail-2.png'
import opshubDetailNewTicket from '@shared/assets/images/cases/paralax/opshub-detail-3.png'
import opshubDetailFilters from '@shared/assets/images/cases/paralax/opshub-detail-5.png'
import interviewerDetailKnowledge from '@shared/assets/images/cases/paralax/interviewer-detail-1.png'
import interviewerDetailQuestions from '@shared/assets/images/cases/paralax/interviewer-detail-3.png'
import interviewerDetailRepeat from '@shared/assets/images/cases/paralax/interviewer-detail-4.png'
import visionAirDetailProduct from '@shared/assets/images/cases/paralax/vision-air-detail-1.png'
import visionAirDetailCart from '@shared/assets/images/cases/paralax/vision-air-detail-2.png'
import visionAirDetailGuarantee from '@shared/assets/images/cases/paralax/vision-air-detail-3.png'
import visionAirDetailCategory from '@shared/assets/images/cases/paralax/vision-air-detail-4.png'

export const projects: Project[] = [
  {
    id: 'selena-crm',
    title: 'CRM для школы танцев',
    previewTitleLines: ['CRM для', 'школы танцев'],
    coverImage: selenaCrmCoverImage,
    coverSources: [
      {
        src: selenaCrmCoverImage1226To901,
        media: '(min-width: 901px) and (max-width: 1226px)',
      },
      {
        src: selenaCrmCoverImage900To561,
        media: '(min-width: 561px) and (max-width: 900px)',
      },
      {
        src: selenaCrmCoverImage560To375,
        media: '(max-width: 560px)',
      },
    ],
    parallaxDetails: [
      {
        src: crmDetailSubscription,
        alt: '',
        className: 'project-card__parallax-detail--crm-subscription',
        speed: -76,
      },
      {
        src: crmDetailDance,
        alt: '',
        className: 'project-card__parallax-detail--crm-dance',
        speed: -122,
      },
      {
        src: crmDetailUser,
        alt: '',
        className: 'project-card__parallax-detail--crm-user',
        speed: -164,
      },
      {
        src: crmDetailAccount,
        alt: '',
        className: 'project-card__parallax-detail--crm-account',
        speed: -98,
      },
    ],
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
    coverSources: [
      {
        src: opshubCoverImage1226To901,
        media: '(min-width: 901px) and (max-width: 1226px)',
      },
      {
        src: opshubCoverImage900To561,
        media: '(min-width: 561px) and (max-width: 900px)',
      },
      {
        src: opshubCoverImage560To375,
        media: '(max-width: 560px)',
      },
    ],
    parallaxDetails: [
      {
        src: opshubDetailFilters,
        alt: '',
        className: 'project-card__parallax-detail--opshub-filters',
        speed: -15,
      },
      {
        src: opshubDetailNewTicket,
        alt: '',
        className: 'project-card__parallax-detail--opshub-new-ticket',
        speed: -30,
      },
      {
        src: opshubDetailResolved,
        alt: '',
        className: 'project-card__parallax-detail--opshub-resolved',
        speed: -32,
      },
      {
        src: opshubDetailWork,
        alt: '',
        className: 'project-card__parallax-detail--opshub-work',
        speed: -30,
      },
    ],
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
    coverSources: [
      {
        src: interviewerCoverImage1226To901,
        media: '(min-width: 901px) and (max-width: 1226px)',
      },
      {
        src: interviewerCoverImage900To561,
        media: '(min-width: 561px) and (max-width: 900px)',
      },
      {
        src: interviewerCoverImage560To375,
        media: '(max-width: 560px)',
      },
    ],
    parallaxDetails: [
      {
        src: interviewerDetailRepeat,
        alt: '',
        className: 'project-card__parallax-detail--interviewer-repeat',
        speed: -18,
      },
      {
        src: interviewerDetailKnowledge,
        alt: '',
        className: 'project-card__parallax-detail--interviewer-knowledge',
        speed: -16,
      },
      {
        src: interviewerDetailQuestions,
        alt: '',
        className: 'project-card__parallax-detail--interviewer-questions',
        speed: -18,
      },
    ],
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
    coverSources: [
      {
        src: visionAirCoverImage1226To901,
        media: '(min-width: 901px) and (max-width: 1226px)',
      },
      {
        src: visionAirCoverImage900To561,
        media: '(min-width: 561px) and (max-width: 900px)',
      },
      {
        src: visionAirCoverImage560To375,
        media: '(max-width: 560px)',
      },
    ],
    parallaxDetails: [
      {
        src: visionAirDetailCart,
        alt: '',
        className: 'project-card__parallax-detail--vision-cart',
        speed: -72,
      },
      {
        src: visionAirDetailProduct,
        alt: '',
        className: 'project-card__parallax-detail--vision-product',
        speed: -28,
      },
      {
        src: visionAirDetailCategory,
        alt: '',
        className: 'project-card__parallax-detail--vision-category',
        speed: -96,
      },
      {
        src: visionAirDetailGuarantee,
        alt: '',
        className: 'project-card__parallax-detail--vision-guarantee',
        speed: -126,
      },
    ],
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
