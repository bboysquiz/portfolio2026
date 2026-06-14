import type { SocialLink } from './types'

export const socialLinks: SocialLink[] = [
  {
    id: 'email',
    kind: 'email',
    label: 'Почта',
    value: 'skvirskii.nikita@gmail.com',
    href: 'mailto:skvirskii.nikita@gmail.com',
  },
  {
    id: 'phone',
    kind: 'phone',
    label: 'Телефон',
    value: '+7 911 798-56-87',
    href: 'tel:+79117985687',
  },
  {
    id: 'github',
    kind: 'github',
    label: 'GitHub',
    value: 'bboysquiz',
    href: 'https://github.com/bboysquiz',
    isExternal: true,
  },
  {
    id: 'telegram',
    kind: 'telegram',
    label: 'Telegram',
    value: '@bboysquiz',
    href: 'https://t.me/bboysquiz',
    isExternal: true,
  },
]
