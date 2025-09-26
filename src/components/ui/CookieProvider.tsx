'use client'

import { useEffect, useState } from 'react'
import { setCookie, getCookie } from 'cookies-next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = getCookie('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    setCookie('cookieConsent', 'true', { maxAge: 60 * 60 * 24 * 30 }) // 30 days
    setShowBanner(false)
  }

  const closeBanner = () => {
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 max-w-xs">
      <Card className="shadow-lg relative">
        <button onClick={closeBanner} className="absolute top-2 right-2 p-1 rounded hover:bg-muted">
          <X className="w-4 h-4" />
        </button>
        <CardContent className="p-4 text-sm">
          <p className="mb-3 pr-6">We use cookies to improve your experience. By continuing, you agree to our cookie policy.</p>
          <Button size="sm" onClick={acceptCookies}>
            Accept
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
