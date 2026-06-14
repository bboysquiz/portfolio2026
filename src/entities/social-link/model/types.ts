export type SocialLinkKind = 'email' | 'phone' | 'github' | 'telegram'

export type SocialLink = {
  id: string
  kind: SocialLinkKind
  label: string
  value: string
  href: string
  isExternal?: boolean
}
