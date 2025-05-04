"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { EventForm } from "@/components/event-form"
import type { Event } from "@/lib/types"

interface SubmitEventButtonProps {
  onEventAdded: (event: Event) => void
}

export function SubmitEventButton({ onEventAdded }: SubmitEventButtonProps) {
  const [open, setOpen] = useState(false)

  const handleEventSubmitted = (event: Event) => {
    onEventAdded(event)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Submit Event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Submit a New Event</DialogTitle>
          <DialogDescription>Add details about an upcoming tech event at your college</DialogDescription>
        </DialogHeader>
        <EventForm onSubmit={handleEventSubmitted} />
      </DialogContent>
    </Dialog>
  )
}
