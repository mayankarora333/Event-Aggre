import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { mockEvents } from "@/lib/mock-data"
import { formatDate } from "@/lib/utils"
import { Calendar, ExternalLink, MapPin, School, Tag } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

export const generateMetadata = ({ params }: { params: { id: string } }) => {
  const event = mockEvents.find((event) => event.id === params.id)

  if (!event) {
    return {
      title: "Event Not Found",
    }
  }

  return {
    title: `${event.name} | Campus Tech Events`,
    description: event.description.substring(0, 160),
  }
}

export default function EventPage({ params }: { params: { id: string } }) {
  const event = mockEvents.find((event) => event.id === params.id)

  if (!event) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/events" className="text-primary hover:underline mb-4 inline-block">
          ← Back to events
        </Link>

        <Card className="overflow-hidden">
          <div className="bg-blue-50 h-48 flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-center px-4">{event.name}</h1>
          </div>

          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-2">
                <Calendar className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Date</h3>
                  <p>{formatDate(event.date)}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p>{event.location}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <School className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium">College</h3>
                  <p>{event.college}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <Tag className="h-5 w-5 text-blue-600" />
              <span className="font-medium">{event.type.charAt(0).toUpperCase() + event.type.slice(1)}</span>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">About this event</h2>
              <p className="text-muted-foreground whitespace-pre-line">{event.description}</p>
            </div>

            <Button asChild className="w-full sm:w-auto">
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                Register for Event <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return mockEvents.map((event) => ({
    id: event.id,
  }))
}
