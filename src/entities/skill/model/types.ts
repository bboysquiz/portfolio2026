export type SkillGroupId =
  | 'architecture'
  | 'frameworks'
  | 'languages'
  | 'web'
  | 'tools'
  | 'libraries'

export type Skill = {
  name: string
  isPrimary?: boolean
}

export type SkillGroup = {
  id: SkillGroupId
  title: string
  skills: Skill[]
}
