"use client"

import { useState } from "react"
import { EventList } from "@/components/event-list"
import { EventFilters } from "@/components/event-filters"
import { mockEvents } from "@/lib/mock-data"
import type { Event, EventType } from "@/lib/types"

export function EventDashboard() {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(mockEvents)

  const applyFilters = (
    searchTerm: string,
    eventType: EventType | "all",
    college: string,
    startDate: Date | undefined,
    endDate: Date | undefined,
  ) => {
    let filtered = mockEvents

    if (searchTerm) {
      filtered = filtered.filter(
        (event) =>
          event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.location.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (eventType !== "all") {
      filtered = filtered.filter((event) => event.type === eventType)
    }

    if (college) {
      filtered = filtered.filter((event) => event.college.toLowerCase().includes(college.toLowerCase()))
    }

    if (startDate) {
      filtered = filtered.filter((event) => new Date(event.date) >= startDate)
    }

    if (endDate) {
      filtered = filtered.filter((event) => new Date(event.date) <= endDate)
    }

    setFilteredEvents(filtered)
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Browse Events</h1>
        <p className="text-muted-foreground mt-1">Discover tech talks, hackathons, and workshops from colleges</p>
      </div>

      <EventFilters onFilterChange={applyFilters} />

      <div className="mt-8">
        <EventList events={filteredEvents} />
      </div>
    </div>
  )
}
