import Link from 'next/link'

export default function Banner() {
  return (
    <div className="group relative top-0 bg-primary py-3 text-white transition-all duration-300 md:py-0">
      <div className="m-auto container px-4 flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <Link href="/webtools" className="inline-flex text-xs leading-normal md:text-sm">
          ✨<span className="ml-1">TheWinterLabs WebTools Suite - All-in-one toolkit to monitor, check, and validate your website and domains.</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-chevron-right ml-1 mt-[3px] hidden size-4 transition-all duration-300 ease-out group-hover:translate-x-1 lg:inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
      <hr className="absolute bottom-0 m-0 h-px w-full bg-neutral-200/30" />
    </div>
  )
}
