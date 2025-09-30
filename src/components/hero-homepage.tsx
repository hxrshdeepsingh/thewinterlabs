import Link from 'next/link'
import { cn } from '@/lib/utils'
import { SparklesText } from './ui/sparkles-text'
import { Highlighter } from './magicui/highlighter'
import { AnimatedShinyText } from './ui/animated-shiny-text'
import { CircleArrowRight, ArrowRightIcon } from 'lucide-react'

export default function HeroHomepage() {
  return (
    <section className="relative p-0">
      <div className="absolute h-full w-full bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/grid1.svg')] bg-contain bg-repeat opacity-100 [mask-image:linear-gradient(to_right,theme(colors.border),transparent,transparent,theme(colors.border))] lg:block"></div>

      <div className="container py-12 md:py-16 px-4 m-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <div className={cn('group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800')}>
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <Link href={'/webtools'}>
                  <span className="text-small">⚡Introducing Our Webtools</span>
                </Link>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>

            <div>
              <h1 className="mb-6 font-semibold text-4xl tracking-tight md:text-5xl lg:text-h1">Bold ideas. Powerful experiences.</h1>
              <p className="text-muted-foreground mx-auto max-w-2xl text-body">At The Winter Labs , we turn bold ideas into seamless web solutions. Clean code, thoughtful design, and future-ready technology come together to build products that truly stand out.</p>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 has-[>svg]:px-3">
                Get Started
              </button>
              <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3">
                Learn More
              </button>
            </div>

            <div className="mt-12 flex flex-col items-center gap-4 lg:mt-16">
              <p className="text-muted-foreground text-center text-sm">Powering the next generation of digital products</p>

              <div className="grid grid-cols-2 place-items-center items-center justify-center gap-6 opacity-80 sm:grid-cols-4 sm:gap-4">
                <img src="https://library.shadcnblocks.com/images/block/logos/shadcn-ui-wordmark.svg" alt="ShadCN UI" className="h-6 dark:invert" />
                <img src="https://library.shadcnblocks.com/images/block/logos/vercel-wordmark.svg" alt="Vercel" className="h-5 dark:invert" />
                <img src="https://library.shadcnblocks.com/images/block/logos/supabase-wordmark.svg" alt="Supabase" className=" h-6 dark:block" />
                <img src="https://library.shadcnblocks.com/images/block/logos/tailwind-wordmark-light.svg" alt="Tailwind CSS" className="h-5 dark:hidden" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
