import { Calendar, MapPin } from "lucide-react"
import { formatDate } from "@/lib/utils"
import type { Event } from "@/lib/types"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  // Update badge variants to use blue theme
  const badgeVariant = event.type === "hackathon" ? "default" : event.type === "workshop" ? "secondary" : "outline"

  const badgeClass =
    event.type === "hackathon"
      ? "bg-blue-600 text-white"
      : event.type === "workshop"
        ? "bg-blue-100 text-blue-800"
        : "border-blue-300 text-blue-800"

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <Badge variant={badgeVariant} className={`mb-2 ${badgeClass}`}>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </Badge>
          <span className="text-sm text-muted-foreground">{event.college}</span>
        </div>
        <CardTitle className="line-clamp-2">
          <Link href={`/events/${event.id}`} className="hover:underline">
            {event.name}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground line-clamp-3 mb-4">{event.description}</p>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4 mr-2 text-blue-600" />
          <span>{formatDate(event.date)}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2 text-blue-600" />
          <span>{event.location}</span>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button asChild variant="outline" className="w-full">
          <Link href={`/events/${event.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
