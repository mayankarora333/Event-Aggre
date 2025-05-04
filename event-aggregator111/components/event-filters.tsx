"use client"

import { Badge } from "@/components/ui/badge"

import type React from "react"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import type { EventType } from "@/lib/types"
import { cn } from "@/lib/utils"

interface EventFiltersProps {
  onFilterChange: (
    searchTerm: string,
    eventType: EventType | "all",
    college: string,
    startDate: Date | undefined,
    endDate: Date | undefined,
  ) => void
}

export function EventFilters({ onFilterChange }: EventFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [eventType, setEventType] = useState<EventType | "all">("all")
  const [college, setCollege] = useState("")
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    onFilterChange(e.target.value, eventType, college, startDate, endDate)
  }

  const handleEventTypeChange = (value: string) => {
    const newType = value as EventType | "all"
    setEventType(newType)
    onFilterChange(searchTerm, newType, college, startDate, endDate)
  }

  const handleCollegeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCollege(e.target.value)
    onFilterChange(searchTerm, eventType, e.target.value, startDate, endDate)
  }

  const handleStartDateChange = (date: Date | undefined) => {
    setStartDate(date)
    onFilterChange(searchTerm, eventType, college, date, endDate)
  }

  const handleEndDateChange = (date: Date | undefined) => {
    setEndDate(date)
    onFilterChange(searchTerm, eventType, college, startDate, date)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setEventType("all")
    setCollege("")
    setStartDate(undefined)
    setEndDate(undefined)
    onFilterChange("", "all", "", undefined, undefined)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search events..." className="pl-8" value={searchTerm} onChange={handleSearch} />
        </div>

        <div className="flex gap-2">
          <Select value={eventType} onValueChange={handleEventTypeChange}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Event Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="hackathon">Hackathon</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
              <SelectItem value="tech-talk">Tech Talk</SelectItem>
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex gap-2">
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">More Filters</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">College</h4>
                  <Input placeholder="Filter by college" value={college} onChange={handleCollegeChange} />
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">Start Date</h4>
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={handleStartDateChange}
                    className="rounded-md border"
                  />
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium">End Date</h4>
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={handleEndDateChange}
                    className="rounded-md border"
                  />
                </div>

                <Button variant="outline" className="w-full" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {searchTerm && (
          <Badge variant="secondary" className={cn("px-3 py-1 bg-blue-100 text-blue-800")}>
            Search: {searchTerm}
          </Badge>
        )}
        {eventType !== "all" && (
          <Badge variant="secondary" className={cn("px-3 py-1 bg-blue-100 text-blue-800")}>
            Type: {eventType.charAt(0).toUpperCase() + eventType.slice(1)}
          </Badge>
        )}
        {college && (
          <Badge variant="secondary" className={cn("px-3 py-1 bg-blue-100 text-blue-800")}>
            College: {college}
          </Badge>
        )}
        {startDate && (
          <Badge variant="secondary" className={cn("px-3 py-1 bg-blue-100 text-blue-800")}>
            From: {startDate.toLocaleDateString()}
          </Badge>
        )}
        {endDate && (
          <Badge variant="secondary" className={cn("px-3 py-1 bg-blue-100 text-blue-800")}>
            To: {endDate.toLocaleDateString()}
          </Badge>
        )}
      </div>
    </div>
  )
}
