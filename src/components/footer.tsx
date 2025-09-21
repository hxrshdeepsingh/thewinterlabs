'use client'
import * as React from 'react'
import Logo from './navbar/logo'
import Link from 'next/link'
// import ThemeToggle from './ui/themeToggle'
import menus from '@/data/footer-menus.json'

const Footer = () => {
  const { siteTitle, menuItems, copyright, bottomLinks } = menus

  return (
    <section className="py-12 max-w-screen-lg mx-auto">
      <div className="container">
        <footer className="px-6 sm:px-4 md:p-2">
          {/* Top Section */}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            {/* Logo */}
            <div className="col-span-2 mb-8 lg:mb-0 flex flex-col justify-between">
              <div className="flex items-center gap-2 lg:justify-start">
                <Link href="/">
                  <Logo />
                </Link>
                <p className="text-xl font-semibold">{siteTitle.title}</p>
              </div>
            </div>

            {/* Menu Sections */}
            {menuItems.map((section, idx) => (
              <div key={idx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="text-small font-medium hover:text-primary">
                      <Link href={link.url}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-12 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <ul className="flex gap-4">
                {bottomLinks.map((link, linkIdx) => (
                  <li key={linkIdx} className="underline hover:text-primary">
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
              {/* <ThemeToggle /> */}
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

export { Footer }
