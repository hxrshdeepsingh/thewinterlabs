'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { useRouter } from 'next/router'

export function BreadCrumbForPage() {
  const pathname = usePathname() || '/'
  const pathSegments = pathname.split('/').filter(Boolean)
  const buildPath = (index: number) => '/' + pathSegments.slice(0, index + 1).join('/')

  return (
    <Breadcrumb className="m-0 justify-center">
      <BreadcrumbList className="m-0 justify-center">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link className="text-small" href="/">
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.map((segment, i) => (
          <span key={i} className="flex items-center">
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link className="text-small" href={buildPath(i)}>
                  {segment.replace(/-/g, ' ')}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
