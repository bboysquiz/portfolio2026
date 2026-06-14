export type Education = {
  year: string
  title: string
  degree: string
  institution: string
}

export type Profile = {
  name: string
  nativeName: string
  role: string
  location: string
  phone: string
  email: string
  summary: string
  specializations: string[]
  highlights: string[]
  education: Education
}
