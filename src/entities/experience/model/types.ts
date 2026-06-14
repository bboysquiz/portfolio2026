export type ExperienceProject = {
  title: string
  description: string
  stack: string[]
  achievements: string[]
}

export type WorkExperience = {
  id: string
  company: string
  role: string
  period: string
  startDate: string
  endDate: string
  location?: string
  summary: string
  projects: ExperienceProject[]
}
