import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Data from '@/data/about.json'

export default function AboutPage() {
  return (
    <section className="py-10 px-4">
      <div className="container mx-auto max-w-screen-lg">
        {/* Title and description */}
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <h1 className="text-5xl font-semibold">{Data.title}</h1>
          <p className="text-muted-foreground">{Data.description}</p>
        </div>

        {/* Main images and breakout card */}
        <div className="grid gap-7 lg:grid-cols-3">
          <Image
            src={Data.mainImage.src}
            alt={Data.mainImage.alt}
            width={800}
            height={620}
            className="size-full rounded-xl object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            {/* Breakout card */}
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <Image
                src={Data.breakout.src}
                alt={Data.breakout.alt}
                width={48}
                height={48}
                className="mr-auto h-12"
              />
              <div>
                <p className="mb-2 text-lg font-semibold">{Data.breakout.title}</p>
                <p className="text-muted-foreground">{Data.breakout.description}</p>
              </div>
              <Button variant="outline" className="mr-auto" asChild>
                <a href={Data.breakout.buttonUrl} target="_blank">
                  {Data.breakout.buttonText}
                </a>
              </Button>
            </div>

            {/* Secondary Image */}
            <Image
              src={Data.secondaryImage.src}
              alt={Data.secondaryImage.alt}
              width={400}
              height={400}
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>

        {/* Companies */}
        <div className="py-32">
          <p className="text-center">{Data.companiesTitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {Data.companies.map((company, idx) => (
              <div className="flex items-center gap-3" key={company.src + idx}>
                <Image
                  src={company.src}
                  alt={company.alt}
                  width={100}
                  height={32}
                  className="h-6 w-auto md:h-8"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-4xl font-semibold">{Data.achievementsTitle}</h2>
            <p className="max-w-screen-sm text-muted-foreground">{Data.achievementsDescription}</p>
          </div>

          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {Data.achievements.map((item, idx) => (
              <div className="flex flex-col gap-4" key={item.label + idx}>
                <p>{item.label}</p>
                <span className="text-4xl font-semibold md:text-5xl">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
        </div>

      </div>
    </section>
  )
}
