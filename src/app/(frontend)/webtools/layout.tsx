'use client'

import { ReactNode } from 'react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Server, Database, Mail, Wifi, FileText, Key, Repeat, ArrowUpRight } from 'lucide-react'

const tools = [
  { name: 'DNS Lookup', path: '/tools/dns', icon: Server },
  { name: 'SSL Checker', path: '/tools/ssl', icon: Key },
  { name: 'Email Validator', path: '/tools/email', icon: Mail },
  { name: 'Ping Checker', path: '/tools/ping', icon: Wifi },
  { name: 'HTTP Headers', path: '/tools/http-headers', icon: FileText },
  { name: 'Reverse DNS', path: '/tools/reverse-dns', icon: ArrowUpRight },
  { name: 'WHOIS Lookup', path: '/tools/whois', icon: Database },
  { name: 'Redirect Checker', path: '/tools/redirect', icon: Repeat },
]

export default function ToolsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex justify-center py-16 px-4">
      <div className="flex gap-6 max-w-screen-lg w-full">
        <Card className="w-64 p-4 flex-shrink-0">
          <h2 className="font-bold text-lg">Web Tools</h2>
          <p className="text-md text-muted-foreground mb-4">
            A collection of useful online tools for web developers.
          </p>
          <ul className="space-y-2">
            {tools.map((tool) => (
              <li key={tool.name}>
                <Link
                  href={tool.path}
                  className={cn(
                    'flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800',
                    pathname === tool.path ? 'bg-blue-100 dark:bg-blue-900 font-semibold' : '',
                  )}
                >
                  <tool.icon className="w-4 h-4" />
                  <span>{tool.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Card>

        <main className="flex-1">
          <Card className="p-6">{children}</Card>
        </main>
      </div>
    </div>
  )
}
