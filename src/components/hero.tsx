import AnimatedGridPattern from '@/components/ui/animated-grid-pattern'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CircleArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'

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
        <Badge variant="secondary">
          <Zap className="fill-current" />
          {`Thewinterlabs`}
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          {`Building bold ideas into powerful digital experiences.`}
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          {`At The Winter Labs, we turn bold ideas into seamless web solutions. Clean code, thoughtful design, and future-ready technology come together to build products that truly stand out.`}
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Link href={'/projects'}>
          <Button size="lg" className="rounded-full text-base">
            See What We Do <CircleArrowRight className="ml-2 !h-5.5 !w-5.5" />
          </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
