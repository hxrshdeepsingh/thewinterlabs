import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { getPageSEO } from '@/lib/getPageSeo'
import { ArrowUpRight } from 'lucide-react'

export default function AboutPage() {
  const teamMembers = [
    { id: '01', name: 'Harsh', role: 'Engr. & Co-founder' },
    { id: '02', name: 'Palak', role: 'Head of Marketing' },
    { id: '03', name: 'Puja', role: 'Designer' },
    { id: '04', name: 'Sahil', role: 'Web Developer' },
    { id: '05', name: 'Daksh', role: 'Intern' },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container max-w-screen-lg mx-auto flex flex-col-reverse gap-5 md:flex-row md:gap-12">
        <aside className="w-full md:w-1/3 md:pr-4">
          <div className="sticky top-20 space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <Image src="https://library.shadcnblocks.com/images/block/lummi/bw12.jpeg" alt="SaaS Startup Team" width={64} height={64} className="h-16 w-16 rounded-lg object-cover" />
              <div>
                <h3 className="font-semibold">{`SaaS Startup`}</h3>
                <p className="text-muted-foreground text-sm">{`Building the future of productivity`}</p>
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
            <h1 className="mb-12 text-4xl tracking-tight md:text-5xl lg:text-h1 font-semibold">{`About Us`}</h1>

            <p className="w-full text-2xl font-medium leading-[36px] md:max-w-2xl">{`At Thewinterlabs, we transform visionary ideas into high-impact digital solutions. Our team of skilled developers, designers, and strategists is passionate about crafting experiences that are not just functional, but unforgettable. From web platforms to mobile apps, we build products that drive growth and innovation for businesses worldwide.`}</p>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <h2 className="text-2xl font-medium">{`Core Philosophy`}</h2>
              <p className="leading-relaxed">{`We believe in the perfect blend of creativity and technology. Our mission is to deliver solutions that are not only cutting-edge but also intuitive, scalable, and tailored to our clients’ unique goals. Every project we take on reflects our commitment to quality, performance, and digital brilliance.`}</p>
            </div>

            <Image src="https://library.shadcnblocks.com/images/block/lummi/bw12.jpeg" alt="SaaS startup office" width={800} height={500} className="rounded-2xl object-cover my-12" />

            <section>
              <h2 className="mb-8 text-2xl font-medium">{`Our Team`}</h2>
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

            <p className="mt-16 leading-relaxed">{`Join thousands of businesses that trust our platform to power their success. Let's build something amazing together.`}</p>
          </div>
        </main>
      </div>
    </section>
  )
}

export async function generateMetadata() {
  return await getPageSEO('/about', 'pages')
}
