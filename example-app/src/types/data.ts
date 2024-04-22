export type WorkExperience = {
  time: string
  role: string
  company: string
  location: string
  description: string[]
  url?: string
}

export type ProjectImage = {
  src: string
  offset: boolean
  alt: string
}

export type Project = {
  name: string
  description: string
  url: string
  stack: string[]
  img: ProjectImage
}

export type Testimonial = {
  quote: string
  name: string
  role: string
}

export type Data = {
  name: string
  role: string
  description: string
  secondaryDescription: string
  email: string
  github: string
  linkedin: string
  resume: string
  workExperience: WorkExperience[]
  projects: Project[]
  testimonials: Testimonial[]
}
