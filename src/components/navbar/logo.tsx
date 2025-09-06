'use client'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'

export default function Logo() {
  return (
    <>
      <CldImage
        src="logopng_xczd0i"
        width="50"
        height="50"
        crop={{
          type: 'auto',
          source: true,
        }}
        style={{ padding: '0' }}
        alt="logo"
      />
    </>
  )
}
