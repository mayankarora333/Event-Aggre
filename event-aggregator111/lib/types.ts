export type EventType = "hackathon" | "workshop" | "tech-talk"

export interface Event {
  id: string
  name: string
  description: string
  date: Date
  location: string
  type: EventType
  college: string
  link: string
}
