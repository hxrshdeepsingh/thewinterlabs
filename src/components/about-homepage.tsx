import React from 'react'

function AboutHomepage() {
  return (
    <>
      <section className="dark:bg-mint-[#2F332E] py-32 bg-amber-200">
        <div className="container bg-accent">
          <div className="max-w-lg m-auto lg:translate-x-32">
            <h2 className="mb-4 text-2xl font-semibold text-muted-foreground md:text-3xl">About Us</h2>
            <h1 className="max-w-[600px] flex-1 text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">We're Streamline. We're a different kind of planning tool that enables builders to create the future now.</h1>
          </div>

          <div className="relative mt-12 flex gap-4">
            <div className="max-lg:-translate-x-20">
              <img src="/assets/f1.jpg" alt="Modern workspace with an iMac displaying 'DO MORE'" width="800" height="500" />
            </div>
            <div className="border-mint-50 -right-10 bottom-0 aspect-[1.5/1.4] w-[max(30vw,220px)] translate-y-20 max-lg:absolute max-lg:border-[16px] lg:-translate-y-20">
              <img src="/assets/f1.jpg" alt="Person working on a laptop" className="object-cover" />
            </div>
          </div>

          <div className="mt-28 max-w-xl lg:mt-10 lg:translate-x-32">
            <p className="text-lg">Tasks have changed, are changing, and will continue to change — for the better. Now is the time for productivity to be user-first and internet-first. But in order to do this — it needs a new foundation.</p>
          </div>

          <div className="mt-6 space-y-6 md:mt-8 md:space-y-8 lg:mt-10 lg:space-y-10">
            <h2 className="max-w-xl text-2xl font-semibold md:text-3xl lg:translate-x-32">We were always told that to-do apps can't be dynamic systems.</h2>
            <p className="max-w-xl text-lg lg:translate-x-32">Everyone tried fixing the problem by adding features, integrations, and layers of complexity. We have spent our careers using, designing, and rethinking tools like Trello, Notion, and Asana, encountering this problem firsthand. The existing solutions don't work. We believe a to-do app needs to be a dynamic system. But we had to start from ground zero.</p>

            <div className="grid gap-6 py-6 md:grid-cols-2 lg:py-10">
              <img src="/assets/f1.jpg" alt="Team members collaborating" width="600" height="400" className="rounded-lg" />
              <img src="/assets/f1.jpg" alt="Team meeting in a conference room" width="600" height="400" className="rounded-lg" />
            </div>

            <p className="ml-auto max-w-xl text-lg lg:-translate-x-32">We started building Streamline in 2019 and launched in 2022. Every single feature has been built from scratch — with no unnecessary complexity or outdated tools. We are purpose-built to redefine productivity for the next hundred years.</p>

            <h2 className="ml-auto max-w-xl text-2xl font-semibold md:text-3xl lg:-translate-x-32">We are a bit of an unusual team — not your standard tech startup.</h2>

            <div className="ml-auto max-w-xl text-lg lg:-translate-x-32">
              <p>
                We are 100% founder and team-owned, sustainable, and we keep our team small. Over time, we'll make this page more polished, but right now we're focused on delivering for our users. If you'd
                <br />
                like to collaborate, check out our open roles:
              </p>

              <button data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[&>svg]:px-4 mt-6 md:mt-8 lg:mt-10">
                <a href="#" className="">
                  <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                    View Open roles
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right size-4" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutHomepage
