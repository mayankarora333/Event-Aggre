import { EventCard } from "@/components/event-card"
import { mockEvents } from "@/lib/mock-data"

export function FeaturedEvents() {
  // Get the 3 most recent events
  const featuredEvents = [...mockEvents]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}
