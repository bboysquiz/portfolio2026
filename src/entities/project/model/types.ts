export type ProjectStatus = 'published' | 'inProgress' | 'planned'

export type ProjectLink = {
  label: string
  href: string
  isExternal?: boolean
}

export type Project = {
  id: string
  title: string
  previewTitleLines?: string[]
  coverImage?: string
  description: string
  fullDescription: string
  category: string
  status: ProjectStatus
  stack: string[]
  image: string
  videoUrl: string | null
  links: {
    github?: ProjectLink
    live?: ProjectLink
    demo?: ProjectLink
  }
}
