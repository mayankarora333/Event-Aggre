import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"
import { FeaturedEvents } from "@/components/featured-events"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Campus Tech Events</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover tech talks, hackathons, and workshops from colleges across the country, all in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/events">
                Browse Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/events/submit">Submit Event</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Upcoming Events</h3>
              <p className="text-muted-foreground">
                Stay updated with the latest tech events happening at colleges near you.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Multiple Locations</h3>
              <p className="text-muted-foreground">
                Discover events from various colleges and universities across the country.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Community Driven</h3>
              <p className="text-muted-foreground">
                Join a community of tech enthusiasts and contribute by submitting events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Events</h2>
            <Button asChild variant="outline">
              <Link href="/events">View All</Link>
            </Button>
          </div>
          <FeaturedEvents />
        </div>
      </section>
    </div>
  )
}
