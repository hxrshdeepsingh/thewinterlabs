'use client'

import { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CookieConsentDialog() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setOpen(true)
    }
  }, [])

  const handleConsent = (value: 'true' | 'false') => {
    localStorage.setItem('cookie-consent', value)
    setOpen(false)
  }

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>We use cookies 🍪</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-gray-600">
          We use cookies to improve your experience. Read our{' '}
          <Link href="/privacy" className="underline">
            Privacy Policy
          </Link>
          .
        </p>
        <DialogFooter className="mt-4 flex gap-2">
          <Button variant="outline" onClick={() => handleConsent('false')}>
            Decline
          </Button>
          <Button onClick={() => handleConsent('true')}>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
