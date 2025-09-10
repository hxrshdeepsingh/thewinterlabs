import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CircleArrowRight, Zap, ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
// import Gummies from './gummies'
import { AnimatedShinyText } from './ui/animated-shiny-text'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]',
          'inset-x-0 h-full skew-y-12',
        )}
      />
      <div className="relative z-[1] text-center max-w-screen-lg">
        <div className="z-10 flex items-center justify-center">
          <div
            className={cn(
              'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800',
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Introducing TheWinterLabs</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </div>
        {/* <Gummies /> */}
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          {`Bold ideas. Powerful experiences.`}
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          {`At The Winter Labs, we turn bold ideas into seamless web solutions. Clean code, thoughtful design, and future-ready technology come together to build products that truly stand out.`}
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Link href={'/projects'}>
            <Button size="lg" className="text-base">
              See What We Do <CircleArrowRight className="ml-2 !h-5.5 !w-5.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
