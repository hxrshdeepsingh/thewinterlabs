import { Badge } from "@/components-old/ui/badge"
import { Button } from "@/components-old/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components-old/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Separator } from "@/components/ui/separator"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <Badge className="text-sm px-3 py-1 rounded-full">About Us</Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Crafting Scalable & Stunning Digital Solutions
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We’re a web development agency focused on building modern, user-centric websites, apps & digital products.
        </p>
        <Button className="mt-4">Get in Touch</Button>
      </section>

      {/* <Separator /> */}

      {/* Our Story / Mission */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-muted-foreground mb-4">
            At 21st Dev, we help startups, brands, and enterprises build engaging websites and digital experiences.
          </p>
          <ul className="space-y-2">
            {["Customer-first approach", "Scalable architecture", "Agile development", "Pixel-perfect UI/UX"].map((point, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500 w-5 h-5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src="/images/about-team.jpg"
          alt="Our team working"
          width={600}
          height={400}
          className="rounded-xl shadow-md"
        />
      </section>

      {/* <Separator /> */}

      {/* Services Overview */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Website Development", desc: "Responsive, SEO-friendly, high-performing websites." },
            { title: "Web Applications", desc: "Dynamic apps tailored for performance and scalability." },
            { title: "UI/UX Design", desc: "User-focused, sleek, and intuitive interfaces." },
          ].map((service, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* <Separator /> */}

      {/* Team Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Meet the Team</h2>
        <div className="grid md:grid-cols-4 gap-6 justify-center">
          {["Harshdeep Singh", "Aman Mehra", "Simran Kaur", "Vikram Joshi"].map((name, idx) => (
            <Card key={idx} className="text-center">
              <CardContent className="pt-6 flex flex-col items-center">

                <p className="font-medium">{name}</p>
                <p className="text-sm text-muted-foreground">Developer</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
{/*  */}
      {/* <Separator /> */}

      {/* Tech Stack */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Next.js", "React", "Tailwind CSS", "Node.js", "Supabase", "TypeScript", "PostgreSQL"].map((tech, idx) => (
            <Badge key={idx} variant="outline" className="text-base px-4 py-2">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* <Separator /> */}

      {/* Achievements / Stats */}
      <section className="grid md:grid-cols-4 gap-6 text-center">
        {[
          { number: "50+", label: "Projects Delivered" },
          { number: "25+", label: "Happy Clients" },
          { number: "10+", label: "Countries Served" },
          { number: "5+", label: "Years Experience" },
        ].map((stat, idx) => (
          <div key={idx}>
            <h3 className="text-4xl font-bold">{stat.number}</h3>
            <p className="text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* <Separator /> */}

      {/* Testimonials */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: "Sarah Lee",
              text: "They built us a beautiful and fast site. Great team to work with!",
              avatar: "/images/clients/sarah.jpg",
            },
            {
              name: "Tom Warren",
              text: "Their attention to detail and communication was top-notch.",
              avatar: "/images/clients/tom.jpg",
            },
          ].map((t, idx) => (
            <Card key={idx}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">

                  <div className="text-left">
                    <p className="font-medium">{t.name}</p>
                    <p className="text-sm text-muted-foreground">Client</p>
                  </div>
                </div>
                <p className="text-muted-foreground">“{t.text}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      {/* Call to Action */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">Let’s Build Something Great Together</h2>
        <p className="text-muted-foreground">Have a project or idea? We’re here to help bring it to life.</p>
        <Button size="lg">Start a Project</Button>
      </section>
    </div>
  )
}
