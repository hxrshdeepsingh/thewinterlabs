'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components-old/ui/button'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components-old/ui/carousel'

export interface Gallery4Item {
  id: string
  title: string
  description: string
  href: string
  image: string
}

export interface Gallery4Props {
  title?: string
  description?: string
  items?: Gallery4Item[]
}

const data = [
  {
    id: 'shadcn-ui',
    title: 'shadcn/ui',
    description:
      'Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.',
    href: 'https://ui.shadcn.com',
    image:
      'https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/b4ccc6c0-b86b-4e9c-04a9-2ea66fa48e00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none',
  },
  {
    id: 'tailwind',
    title: 'Tailwind CSS',
    description:
      'Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.',
    href: 'https://tailwindcss.com',
    image:
      'https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/2b394a72-ba7c-40d7-8f93-3b837b296d00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none',
  },
  {
    id: 'astro',
    title: 'Astro',
    description:
      "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
    href: 'https://astro.build',
    image:
      'https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/906ad833-45a5-4b19-e4de-153896e13e00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none',
  },
  {
    id: 'ui',
    title: 'shadcn/ui',
    description:
      'Explore how shadcn/ui revolutionized React component libraries by providing a unique approach to component distribution and customization, making it easier for developers to build beautiful, accessible applications.',
    href: 'https://ui.shadcn.com',
    image:
      'https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/b4ccc6c0-b86b-4e9c-04a9-2ea66fa48e00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none',
  },
  {
    id: 'ux',
    title: 'Tailwind CSS',
    description:
      'Discover how Tailwind CSS transformed the way developers style their applications, offering a utility-first approach that speeds up development while maintaining complete design flexibility.',
    href: 'https://tailwindcss.com',
    image:
      'https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/2b394a72-ba7c-40d7-8f93-3b837b296d00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none',
  },
  {
    id: 'webdev',
    title: 'Astro',
    description:
      "Learn how Astro's innovative 'Islands Architecture' and zero-JS-by-default approach is helping developers build faster websites while maintaining rich interactivity where needed.",
    href: 'https://astro.build',
    image:
      'https://linear.app/cdn-cgi/imagedelivery/fO02fVwohEs9s9UHFwon6A/906ad833-45a5-4b19-e4de-153896e13e00/f=auto,dpr=2,q=95,fit=scale-down,metadata=none',
  },
]

const Gallery = ({
  title = 'Case Studies',
  description = 'Discover how leading companies and developers are leveraging modern web technologies to build exceptional digital experiences. These case studies showcase real-world applications and success stories.',
  items = data,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!carouselApi) {
      return
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev())
      setCanScrollNext(carouselApi.canScrollNext())
      setCurrentSlide(carouselApi.selectedScrollSnap())
    }
    updateSelection()
    carouselApi.on('select', updateSelection)
    return () => {
      carouselApi.off('select', updateSelection)
    }
  }, [carouselApi])

  return (
    <section className="py-32">
      <div className="container max-w-custom mx-auto">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">{title}</h2>
            <p className="max-w-lg text-muted-foreground">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev()
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext()
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="container-xl max-w-custom mx-auto">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              '(max-width: 768px)': {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 gap-5">
            {items.map((item) => (
              <CarouselItem key={item.id} className="max-w-[320px] lg:max-w-[360px] p-0">
                <a href={item.href} className="group ">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-[32px] md:aspect-[5/4] lg:aspect-[16/9] border-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                    <div className="absolute backdrop-blur-custom inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary md:p-8">
                      <div className="mb-2 pt-4 text-lg font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">{item.description}</div>
                      <div className="flex items-center text-sm">
                        Read more{' '}
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-primary' : 'bg-primary/20'
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
