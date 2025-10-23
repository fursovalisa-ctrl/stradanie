import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'SkillGrid Documentation',
  description: 'Документация компонентной библиотеки SkillGrid',
  lang: 'ru-RU',
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Компоненты', link: '/components/' },
      { text: 'Локализация', link: '/locale/' },
      { text: 'Генератор', link: '/generator/' },
    ],

    sidebar: {
      '/components/': [
        {
          text: 'Компоненты',
          items: [
            { text: 'Обзор', link: '/components/' },
            { text: 'Структура', link: '/components/structure' },
            { text: 'Правила', link: '/components/rules' },
            { text: 'Примеры', link: '/components/examples' },
          ],
        },
      ],
      '/locale/': [
        {
          text: 'Локализация',
          items: [
            { text: 'Обзор', link: '/locale/' },
            { text: 'Структура', link: '/locale/structure' },
            { text: 'Использование', link: '/locale/usage' },
            { text: 'Лучшие практики', link: '/locale/best-practices' },
          ],
        },
      ],
      '/generator/': [
        {
          text: 'Генератор компонентов',
          items: [
            { text: 'Обзор', link: '/generator/' },
            { text: 'Конфигурация', link: '/generator/configuration' },
            { text: 'Использование', link: '/generator/usage' },
            { text: 'Модули', link: '/generator/modules' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'gitlab', link: 'https://gitlab.dev.skillaz.ru/frontend/skillgrid' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present SkillAZ',
    },

    search: {
      provider: 'local',
    },
  },
});
