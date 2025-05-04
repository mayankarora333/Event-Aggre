import type { Event } from "@/lib/types"

export const mockEvents: Event[] = [
  {
    id: "1",
    name: "MIT Hackathon 2023",
    description:
      "Join us for a 48-hour coding marathon where students will collaborate to build innovative solutions for real-world problems. Prizes include internship opportunities and tech gadgets.",
    date: new Date("2023-11-15"),
    location: "MIT Media Lab, Cambridge",
    type: "hackathon",
    college: "MIT",
    link: "https://example.com/mit-hackathon",
  },
  {
    id: "2",
    name: "Web Development Workshop",
    description:
      "Learn the fundamentals of modern web development with React and Next.js. This hands-on workshop will cover component-based architecture, state management, and deployment strategies.",
    date: new Date("2023-11-20"),
    location: "Computer Science Building, Stanford University",
    type: "workshop",
    college: "Stanford",
    link: "https://example.com/stanford-workshop",
  },
  {
    id: "3",
    name: "AI in Healthcare: Future Perspectives",
    description:
      "A tech talk by leading researchers discussing the applications of artificial intelligence in modern healthcare systems. Topics include diagnostic tools, personalized medicine, and ethical considerations.",
    date: new Date("2023-11-25"),
    location: "Harvard Medical School Auditorium",
    type: "tech-talk",
    college: "Harvard",
    link: "https://example.com/harvard-ai-talk",
  },
  {
    id: "4",
    name: "Blockchain Innovation Challenge",
    description:
      "A weekend hackathon focused on developing blockchain applications for social good. Mentors from leading crypto companies will be available to guide participants.",
    date: new Date("2023-12-02"),
    location: "Berkeley Blockchain Accelerator",
    type: "hackathon",
    college: "UC Berkeley",
    link: "https://example.com/berkeley-blockchain",
  },
  {
    id: "5",
    name: "Mobile App Development Bootcamp",
    description:
      "An intensive two-day workshop covering iOS and Android development. Participants will build a fully functional mobile application by the end of the workshop.",
    date: new Date("2023-12-05"),
    location: "Engineering Center, Carnegie Mellon University",
    type: "workshop",
    college: "CMU",
    link: "https://example.com/cmu-mobile-bootcamp",
  },
  {
    id: "6",
    name: "Quantum Computing: Breaking Barriers",
    description:
      "A technical talk by Dr. Jane Smith on recent advancements in quantum computing and its potential to revolutionize computational problems previously thought unsolvable.",
    date: new Date("2023-12-10"),
    location: "Physics Department, Caltech",
    type: "tech-talk",
    college: "Caltech",
    link: "https://example.com/caltech-quantum",
  },
  {
    id: "7",
    name: "Sustainability Hackathon",
    description:
      "Develop innovative tech solutions addressing climate change and environmental sustainability. Sponsored by leading green tech companies with opportunities for project funding.",
    date: new Date("2023-12-15"),
    location: "Environmental Science Building, Yale University",
    type: "hackathon",
    college: "Yale",
    link: "https://example.com/yale-sustainability",
  },
  {
    id: "8",
    name: "Cybersecurity Fundamentals Workshop",
    description:
      "Learn essential cybersecurity practices, threat modeling, and ethical hacking techniques in this hands-on workshop led by industry professionals.",
    date: new Date("2023-12-18"),
    location: "Computer Science Department, Princeton University",
    type: "workshop",
    college: "Princeton",
    link: "https://example.com/princeton-cybersecurity",
  },
  {
    id: "9",
    name: "The Future of Robotics",
    description:
      "A fascinating talk on cutting-edge robotics research, including advances in machine learning, computer vision, and human-robot interaction.",
    date: new Date("2023-12-22"),
    location: "Robotics Lab, Georgia Tech",
    type: "tech-talk",
    college: "Georgia Tech",
    link: "https://example.com/gatech-robotics",
  },
]
