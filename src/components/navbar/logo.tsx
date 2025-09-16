'use client'
import { CldImage } from 'next-cloudinary'
import Link from 'next/link'

export default function Logo() {
  return (
    <>
      {/* <CldImage
        src="logopng_xczd0i"
        width="50"
        height="50"
        crop={{
          type: 'auto',
          source: true,
        }}
        style={{ padding: '0' }}
        alt="logo"
      /> */}
      <svg
        width="AUTO"
        height="20"
        viewBox="0 0 139 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M84.3504 0H48.1695V16.685L32.569 0.00107384L0 0.0158653V34.0485L28.31 64H67.4439V48.0786L82.6881 64H116.593V37.8126H139V0H99.1163V15.792L84.3504 0Z"
          fill="black"
        />
      </svg>
    </>
  )
}
