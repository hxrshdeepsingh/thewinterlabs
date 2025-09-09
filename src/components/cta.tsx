'use client'
import { ArrowRight, Check } from 'lucide-react'
// import { Waves } from "./wave";
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface Cta4Props {
  title?: string
  description?: string
  buttonText?: string
  buttonUrl?: string
  items?: string[]
}

const defaultItems = [
  'Blazing Fast & Secure',
  '24/7 Support',
  'Customizable Design',
  'Scalable Performance',
  'Hundreds of Blocks',
  'Global-Ready',
  'Future-Ready Tech',
]

export const Cta = ({
  title = 'Let’s Build Something Extraordinary',
  description = 'Partner with The Winter Labs to create powerful, scalable, and beautifully designed digital experiences tailored to your vision.',
  buttonText = 'Get Started',
  buttonUrl = '/contact',
  items = defaultItems,
}: Cta4Props) => {
  return (
    <section className="py-32">
      <div className="container relative max-w-screen-lg mx-auto">
        <div className="flex justify-center">
          <div className="max-w-5xl">
            <div className="flex flex-col items-start justify-between gap-8 bg-[var(--red-light-color)] rounded-lg px-6 py-10 md:flex-row lg:px-20 lg:py-16">
              <div className="md:w-1/2">
                <h4 className="mb-1 text-2xl font-bold md:text-3xl">{title}</h4>
                <p className="text-muted-foreground">{description}</p>
                <Button className="mt-6" asChild>
                  <Link href={buttonUrl}>
                    {buttonText} <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
              <div className="md:w-1/3">
                <ul className="flex flex-col space-y-2 text-sm font-medium">
                  {items.map((item, idx) => (
                    <li className="flex items-center" key={idx}>
                      <Check className="mr-4 size-4 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
