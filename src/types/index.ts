export type Locale = 'ru' | 'en' | 'kg'

export type Section = 'projects' | 'hardware' | 'skills' | 'contact'

export type SkillLevel = 'primary' | 'advanced' | 'conceptual'

export interface Skill {
  label: string
  level: SkillLevel
}

export interface SkillGroup {
  id: string
  title: Record<Locale, string>
  iconName: string
  skills: Skill[]
}

export interface Project {
  id: string
  tech: string[]
  link?: string
}
