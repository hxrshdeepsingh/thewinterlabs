import React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { getPageSEO } from '@/lib/getPageSeo'
import { CheckCircle, MailOpen, Phone } from 'lucide-react'

export default function Contact({
  title = 'Contact Us',
  description = 'We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!',
  email = 'thewinterlabs@gmail.com',
  cal = 'Cal.com',
  calurl = 'https://cal.com/thewinterlabs/30min'
}) {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto max-w-screen-lg">
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-h1 font-semibold">{title}</h1>
          <p className="text-body text-muted-foreground">{description}</p>
        </div>

        <div className="mx-auto flex w-full flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="flex w-full flex-col gap-10">
            <div className="mx-auto w-full lg:mx-0">

              <div className="flex mb-4 items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                <MailOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-medium">
                  <a target="_blank" href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </span>
              </div>

              <div className="flex mb-4 items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-medium">
                  <a target="_blank" href={calurl} className="underline">
                    {cal}
                  </a>
                </span>
              </div>

            </div>
          </div>
          <div className="flex w-full flex-col gap-6 rounded-lg border p-10 m-0">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
            <Button className="w-full">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export async function generateMetadata() {
  return await getPageSEO(3, 'pages')
}
