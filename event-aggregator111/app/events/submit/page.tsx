"use client"

import { EventForm } from "@/components/event-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Event } from "@/lib/types"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SubmitEventPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (event: Event) => {
    setIsSubmitting(true)

    // Simulate API call to save the event
    setTimeout(() => {
      setIsSubmitting(false)
      router.push("/events/success")
    }, 1000)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Submit a New Event</CardTitle>
            <CardDescription>Share details about an upcoming tech event at your college</CardDescription>
          </CardHeader>
          <CardContent>
            <EventForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
