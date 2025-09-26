import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const Cta = ({ title = 'Want a professional, extraordinary website tailored to your needs?', subtitle = 'Get in touch', description = `We've helped <span class="text-primary">founders and teams</span> build their products and apps from scratch, and we can help you too.`, buttonText = 'Talk to us', buttonUrl = '/contact' }) => {
  return (
    <section className="px-4">
      <div className="relative rounded-md shadow-sm border mx-auto my-20 container max-w-screen-lg grid-cols-1 justify-start bg-gradient-to-br from-gray-100 to-white md:my-20 md:grid-cols-3 dark:from-neutral-900 dark:to-neutral-950">
        <div className="p-8 md:col-span-2 md:p-14">
          <h2 className="text-left text-xl font-medium tracking-tight text-neutral-500 md:text-3xl dark:text-neutral-200">
            {title}
            <span className="font-bold text-black dark:text-white">{subtitle}</span>
          </h2>

          <p className="mt-4 max-w-lg text-left text-base font-medium tracking-tight text-neutral-500 md:text-base dark:text-neutral-200" dangerouslySetInnerHTML={{ __html: description }} />

          <div className="flex flex-col items-start sm:flex-row sm:items-center sm:gap-4">
            <div className="mt-6 flex justify-center">
              <Button>
                <Link href={'/contact'}>{buttonText}</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-dashed p-8 md:border-t-0 md:border-l md:p-14">
          <p className="text-base text-neutral-700 dark:text-neutral-200">Manu literally took our requirements and quite literally ran with them. To anyone reading this - I can't recommend Manu enough, your job will be done exceptionally well, and you will be delighted with the end result.</p>
          <div className="mt-4 flex flex-col items-start gap-1 text-sm">
            <p className="font-bold text-neutral-800 dark:text-neutral-200">John Shahawy</p>
            <p className="text-neutral-500 dark:text-neutral-400">Founder - Moonbeam, Rogue.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
