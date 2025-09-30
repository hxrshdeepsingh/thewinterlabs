import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { getPageSEO } from '@/lib/getPageSeo'
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      id: 1,
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email',
      subtitle: 'Get a response within 24 hours',
      link: `mailto:thewinterlabs@gmail.com`,
      linkText: `thewinterlabs@gmail.com`,
    },
    {
      id: 2,
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: 'Live Chat',
      subtitle: 'Instant support available now',
      link: '#',
      linkText: 'Start chatting',
    },
    {
      id: 3,
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Phone',
      subtitle: 'Mon-Fri, 9AM-6PM EST',
      link: 'tel:+15551234567',
      linkText: '+1 (555) 123-4567',
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-screen-lg">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-4xl tracking-tight md:text-5xl lg:text-h1 font-semibold">{`Contact Us`}</h1>
          <p className="text-body text-muted-foreground">{`We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!`}</p>
        </div>

        <div className="mx-auto flex w-full flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="flex w-full flex-col gap-6">
            {contactMethods.map((method) => (
              <div key={method.id} className="flex gap-4 rounded-xl bg-muted p-6 text-card-foreground shadow-none">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">{method.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="mb-1 font-semibold">{method.title}</h3>
                  <p className="mb-1 text-sm text-muted-foreground">{method.subtitle}</p>
                  <a href={method.link} className="text-sm font-medium transition-colors hover:underline">
                    {method.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col gap-4 rounded-lg border p-10">
            <div className="flex gap-4">
              <div className="flex-1 grid gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" />
              </div>
              <div className="flex-1 grid gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" />
              </div>
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
            <Button className="w-full mt-4">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export async function generateMetadata() {
  return await getPageSEO('/contact', 'pages')
}
