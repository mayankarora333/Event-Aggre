import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Event Submitted | Campus Tech Events",
  description: "Your event has been successfully submitted",
}

export default function SuccessPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">Event Submitted!</CardTitle>
            <CardDescription>Thank you for contributing to the campus tech community</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p>
              Your event has been successfully submitted and will be reviewed by our team. It should appear in the
              events listing soon.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/events">Browse Events</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Return Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
