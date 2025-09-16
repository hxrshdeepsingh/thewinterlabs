// app/tools/layout.tsx
import { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Card } from '@/components/ui/card'

const tools = [
  { name: 'DNS Lookup', href: '/webtools/dns' },
  { name: 'WHOIS Lookup', href: '/tools/whois' },
  { name: 'SSL Checker', href: '/webtools/sslchecker' },
  { name: 'Server Status', href: '/tools/server-status' },
  { name: 'Email Validator', href: '/tools/email' },
  { name: 'Redirect Checker', href: '/tools/redirect' },
  { name: 'Domain to IP', href: '/tools/domain-to-ip' },
  { name: 'Ping Latency', href: '/tools/ping' },
  { name: 'HTTP Headers', href: '/tools/headers' },
]

export default function ToolsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen max-w-screen-lg mx-auto py-20">
      {/* Sidebar */}
      <aside className="w-64 border p-4 rounded-lg">
        {/* <h2 className="text-lg font-semibold mb-4">🌐 Web Tools</h2> */}
        <nav className="space-y-2">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className={cn('block rounded-md px-3 py-2 text-sm font-medium hover:bg-muted')}
            >
              {tool.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        <Card className="p-6">{children}</Card>
      </main>
    </div>
  )
}
