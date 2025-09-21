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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import Link from 'next/link'
import Logo from '@/components/navbar/logo'
import menus from '@data/menus.json'
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler'
import Banner from '../ui/banner'
export const Navbar = () => {
  return (
    // <section className="fixed z-10 top-6 inset-x-4">
    <>
      <Banner />
      <section className="py-2 px-4 sticky top-0 bg-background/80 backdrop-blur-md z-20">
        <div className="container max-w-screen-lg m-auto ">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
              <span className="text-lg font-semibold tracking-tighter">Thewinterlabs</span>
            </Link>

            {/* Menu items */}
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList>
                {menus.map((menu) => (
                  <NavigationMenuItem key={menu.id}>
                    {menu.children ? (
                      <>
                        <NavigationMenuTrigger
                          className={`${navigationMenuTriggerStyle()} text-small`}
                        >
                          {menu.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <div className="grid w-[600px] grid-cols-2 p-3">
                            {menu.children.map((child) => (
                              <NavigationMenuLink
                                asChild
                                key={child.id}
                                className="text-small rounded-md p-3 transition-colors hover:bg-muted/70"
                              >
                                <Link href={child.path}>
                                  <p className="mb-1 text-small text-foreground">{child.name}</p>
                                  <span className="text-small text-muted-foreground">
                                    {child.description}
                                  </span>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link className="text-small font-semibold" href={menu.path}>
                          {menu.name}
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Buttons */}
            <div className="hidden items-center gap-4 lg:flex">
              <AnimatedThemeToggler />
              <Button>Contact us</Button>
            </div>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <MenuIcon className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="max-h-screen overflow-auto gap-0">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-2">
                      <Logo />
                      <span className="text-lg font-semibold tracking-tighter">Thewinterlabs</span>
                    </Link>
                  </SheetTitle>
                  <SheetClose
                    asChild
                    className="w-12 h-12 p-3 text-2xl bg-gray-200 rounded-full hover:bg-gray-300"
                  ></SheetClose>
                </SheetHeader>
                <div className="flex flex-col p-4">
                  <div className="flex flex-col gap-6">
                    {menus.map((menu) => (
                      <Link
                        id={`menu-${menu.id}`}
                        key={menu.id}
                        href={menu.path}
                        className="font-medium"
                      >
                        {menu.name}
                      </Link>
                    ))}
                  </div>
                  <Accordion type="single" collapsible className="mt-4 mb-2">
                    <AccordionItem value="solutions" className="border-none">
                      <AccordionTrigger className="text-base hover:no-underline">
                        Our Tools
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid md:grid-cols-2">
                          {menus
                            .find((menu) => menu.name === 'Our Tools')
                            ?.children?.map((child) => (
                              <Link
                                href={child.path}
                                key={child.id}
                                className="rounded-md p-3 transition-colors hover:bg-muted/70"
                              >
                                <p className="mb-1 font-semibold text-foreground">{child.name}</p>
                              </Link>
                            ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </section>
    </>
  )
}
