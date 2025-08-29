'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // default nprogress styles

export default function TopLoader() {
  const pathname = usePathname()

  useEffect(() => {
    NProgress.start()

    // Small delay to show animation properly
    const timer = setTimeout(() => {
      NProgress.done()
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [pathname]) // triggers when route changes

  return null
}
