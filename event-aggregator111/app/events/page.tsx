import { EventDashboard } from "@/components/event-dashboard"

export const metadata = {
  title: "Browse Events | Campus Tech Events",
  description: "Browse and filter tech events from colleges across the country",
}

export default function EventsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <EventDashboard />
    </div>
  )
}
