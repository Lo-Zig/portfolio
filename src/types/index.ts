export type ProjectCategory = 'web' | 'ui' | 'tool' | 'other'

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  coverGradient: [string, string]
  tags: string[]
  category: ProjectCategory
  year: number
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Skill {
  name: string
  level: 'expert' | 'proficient' | 'learning'
  category: 'frontend' | 'tooling' | 'design'
}

export interface SocialLink {
  label: string
  href: string
}

export type Theme = 'dark' | 'light'

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}
