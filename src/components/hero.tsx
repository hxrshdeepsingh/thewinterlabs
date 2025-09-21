'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CircleArrowRight, ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import { AnimatedShinyText } from './ui/animated-shiny-text'
import { Highlighter } from './magicui/highlighter'
import { SparklesText } from './ui/sparkles-text'
// import Prism from './prism'

const Hero = () => {
  return (
    <div className="relative min-h-[calc(100vh-10rem)] flex items-center justify-center px-6 pt-6 overflow-hidden">
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
        <SparklesText>
          <h1 className="mt-6 text-h1 font-medium !leading-[1] tracking-tight">
            {`Bold ideas.`}
            <br />
            {`Powerful experiences.`}
          </h1>
        </SparklesText>
        <p className="mt-6 text-[17px] md:text-lg">
          <Highlighter action="highlight" color="#fff4e1">{`At The Winter Labs`}</Highlighter>{' '}
          {`, we turn bold ideas into seamless web solutions. Clean code, thoughtful design, and future-ready technology come together to build products that truly stand out.`}
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Link href={'/services'}>
            <Button size="lg" className="text-base">
              See What We Do <ArrowRightIcon className="ml-2 !h-5.5 !w-5.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
