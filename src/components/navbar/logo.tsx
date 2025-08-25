'use client'
import { CldImage } from 'next-cloudinary'

export default function Logo() {
  return (
    <>
      <CldImage
        src="logo_rafrgn"
        width="50"
        height="50"
        crop={{
          type: 'auto',
          source: true,
        }}
        style={{ padding: '10px' }}
        alt="logo"
      />
    </>
  )
}
