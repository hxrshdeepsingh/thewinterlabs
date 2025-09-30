import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { getPageSEO } from '@/lib/getPageSeo'
import { ArrowUpRight } from 'lucide-react'

export default function AboutPage() {
  const teamMembers = [
    { id: '01', name: 'Sarah Chen', role: 'CEO & Co-founder' },
    { id: '02', name: 'Marcus Rodriguez', role: 'CTO & Co-founder' },
    { id: '03', name: 'Emily Watson', role: 'Head of Product' },
    { id: '04', name: 'David Kim', role: 'Lead Engineer' },
    { id: '05', name: 'Lisa Thompson', role: 'Head of Design' },
    { id: '06', name: 'Alex Johnson', role: 'Head of Marketing' },
    { id: '07', name: 'Rachel Green', role: 'Head of Sales' },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container max-w-screen-lg mx-auto flex flex-col-reverse gap-5 md:flex-row md:gap-12">
        <aside className="w-full md:w-1/3 md:pr-4">
          <div className="sticky top-20 space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <Image src="https://library.shadcnblocks.com/images/block/lummi/bw12.jpeg" alt="SaaS Startup Team" width={64} height={64} className="h-16 w-16 rounded-lg object-cover" />
              <div>
                <h3 className="font-semibold">SaaS Startup</h3>
                <p className="text-muted-foreground text-sm">Building the future of productivity</p>
              </div>
            </div>

            <nav>
              <Link href={'/contact'}>
                <Button variant="link" className="flex items-center gap-2 text-xl sm:text-2xl p-0">
                  Contact Us <ArrowUpRight className="h-6 w-6" />
                </Button>
              </Link>
            </nav>
          </div>
        </aside>

        <main className="w-full md:w-2/3">
          <div className="max-w-4xl space-y-12">
            <h1 className="mb-12 text-4xl tracking-tight md:text-5xl lg:text-h1 font-semibold">About Us</h1>

            <p className="w-full text-2xl font-medium leading-[36px] md:max-w-2xl">We're a team of passionate innovators building cutting-edge SaaS solutions that help businesses streamline their operations and boost productivity. Our mission is to create software that not only solves today's problems but anticipates tomorrow's challenges.</p>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <h2 className="text-2xl font-medium">Core Philosophy</h2>
              <p className="leading-relaxed">We believe in the power of technology to transform how businesses operate. Our goal is to build intuitive, scalable solutions that grow with our customers and adapt to their evolving needs.</p>
            </div>

            <Image src="https://library.shadcnblocks.com/images/block/lummi/bw12.jpeg" alt="SaaS startup office" width={800} height={500} className="rounded-2xl object-cover my-12" />

            <section>
              <h2 className="mb-8 text-2xl font-medium">Our Team</h2>
              <div className="space-y-6">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex items-center justify-between border-b py-4">
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground font-mono text-sm">{member.id}</span>
                      <span className="text-base">{member.name}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">{member.role}</span>
                  </div>
                ))}
              </div>
            </section>

            <p className="mt-16 leading-relaxed">Join thousands of businesses that trust our platform to power their success. Let's build something amazing together.</p>
          </div>
        </main>
      </div>
    </section>
  )
}

export async function generateMetadata() {
  return await getPageSEO('/about', 'pages')
}
