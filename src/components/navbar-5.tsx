'use client'

import { MenuIcon } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import Link from 'next/link'
import Logo from './navbar/logo'
import Image from 'next/image'
export const Navbar5 = () => {
  const features = [
    {
      title: 'Dashboard',
      description: 'Overview of your activity',
      href: '/contact',
    },
    {
      title: 'Analytics',
      description: 'Track your performance',
      href: '#',
    },
    {
      title: 'Analytics',
      description: 'Track your performance',
      href: '#',
    },
    {
      title: 'Analytics',
      description: 'Track your performance',
      href: '#',
    },
    {
      title: 'Analytics',
      description: 'Track your performance',
      href: '#',
    },
    {
      title: 'Analytics',
      description: 'Track your performance',
      href: '#',
    },
    {
      title: 'Settings',
      description: 'Configure your preferences',
      href: '#',
    },
    {
      title: 'Integrations',
      description: 'Connect with other tools',
      href: '#',
    },
    {
      title: 'Storage',
      description: 'Manage your files',
      href: '#',
    },
    {
      title: 'Support',
      description: 'Get help when needed',
      href: '#',
    },
  ]

  return (
    <section className="fixed z-10 top-6 inset-x-4">
      <div className="container max-w-screen-lg m-auto">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-lg font-semibold tracking-tighter">Thewinterlabs</span>
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/projects">Projects</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/services">Services</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/products">Products</Link>
                </NavigationMenuLink>
              </NavigationMenuItem> */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <Link href="/webtools">Our Tools</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 p-3">
                    {features.map((feature, index) => (
                      <NavigationMenuLink
                        asChild
                        key={index}
                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                      >
                        <Link href={feature.href}>
                          <p className="mb-1 font-semibold text-foreground">{feature.title}</p>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            {/* <Button variant="outline">Sign in</Button> */}
            <Button>Contact us</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link href="/" className="flex items-center gap-2">
                    <Logo />
                    <span className="text-lg font-semibold tracking-tighter">Thewinterlabs</span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mt-4 mb-2">
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="text-base hover:no-underline">
                      Features
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2">
                        {features.map((feature, index) => (
                          <Link
                            href={feature.href}
                            key={index}
                            className="rounded-md p-3 transition-colors hover:bg-muted/70"
                          >
                            <div key={feature.title}>
                              <p className="mb-1 font-semibold text-foreground">{feature.title}</p>
                              <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-6">
                  <Link href="#" className="font-medium">
                    Templates
                  </Link>
                  <Link href="#" className="font-medium">
                    Blog
                  </Link>
                  <Link href="#" className="font-medium">
                    Pricing
                  </Link>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  {/* <Button variant="outline">Sign in</Button> */}
                  <Button>Contact us</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  )
}
