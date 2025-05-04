import { EventCard } from "@/components/event-card"
import type { Event } from "@/lib/types"

interface EventListProps {
  events: Event[]
}

export function EventList({ events }: EventListProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No events found</h3>
        <p className="text-muted-foreground mt-1">Try adjusting your filters or add a new event</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  )
}
