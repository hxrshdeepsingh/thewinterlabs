'use client'
import Logo from './navbar/logo'
import Link from 'next/link'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Sun, Moon } from 'lucide-react'
import * as React from 'react'

interface MenuItem {
  title: string
  links: {
    text: string
    url: string
  }[]
}

interface Footer2Props {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
  tagline?: string
  menuItems?: MenuItem[]
  copyright?: string
  bottomLinks?: {
    text: string
    url: string
  }[]
}

const Footer = ({
  logo = {
    src: 'https://www.shadcnblocks.com/images/block/block-1.svg',
    alt: 'blocks for shadcn/ui',
    title: 'Thewinterlabs',
    url: 'https://www.shadcnblocks.com',
  },
  menuItems = [
    {
      title: 'Company',
      links: [
        { text: 'About', url: '/about' },
        { text: 'Projects', url: '/projects' },
        { text: 'Careers', url: '' },
        { text: 'Contact', url: '/contact' },
        { text: 'Privacy', url: '/privacy' },
      ],
    },
    {
      title: 'Technologies',
      links: [
        { text: 'Ai', url: '#' },
        { text: 'Springboot', url: '#' },
        { text: 'Next Js', url: '#' },
        { text: 'React Js', url: '#' },
        { text: 'Wordpress', url: '#' },
      ],
    },
    {
      title: 'Social',
      links: [
        { text: 'Twitter', url: 'https://x.com/thewinterlabs' },
        { text: 'Instagram', url: 'https://www.instagram.com/thewinterlabs/' },
        { text: 'Trustpilot', url: 'https://www.trustpilot.com/review/thewinterlabs.in' },
      ],
    },
  ],
  copyright = '© 2025 Thewinterlabs Copyright. All rights reserved.',
  bottomLinks = [
    { text: 'Terms and Conditions', url: '#' },
    { text: 'Privacy Policy', url: '#' },
  ],
}: Footer2Props) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])
  return (
    <section className="py-12 max-w-screen-lg m-auto">
      <div className="container">
        <footer className="px-6 sm:px-4 md:p-0">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
            <div className="col-span-2 mb-8 lg:mb-0 flex flex-col justify-between">
              <div className="flex items-center gap-2 lg:justify-start">
                <Link href="/">
                  <Logo />
                </Link>
                <p className="text-xl font-semibold">{logo.title}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4" />
                <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={setIsDarkMode} />
                <Moon className="h-4 w-4" />
                <Label htmlFor="dark-mode" className="sr-only">
                  Toggle dark mode
                </Label>
              </div>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-medium hover:text-primary">
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  )
}

export { Footer }
