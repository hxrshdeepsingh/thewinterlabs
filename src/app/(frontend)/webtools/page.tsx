'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Server, Globe, Shield, Mail, Search } from 'lucide-react'
import { BreadCrumbForPage } from '@/components/breadCrumbForPage'

const toolsData = [
  {
    category: 'Website Tools',
    tools: [
      // { name: 'Is Server Down?', description: 'Check if your website server is online and accessible.', icon: Server, badge: 'Free' },
      // { name: 'Ping Latency Checker', description: 'Measure latency and response times of your server.', icon: Server, badge: 'New' },
      // { name: 'HTTP Headers Checker', description: 'View HTTP headers returned by your website.', icon: Globe, badge: 'Popular' },
      // { name: 'Redirect Checker', description: 'Detect if your domain redirects to another URL.', icon: Globe },
    ],
  },
  {
    category: 'Domain Tools',
    tools: [
      { name: 'DNS Lookup', description: 'Lookup A, AAAA, MX, TXT, CNAME, NS records for any domain.', icon: Globe, badge: 'Free', url: '/webtools/dns' },
      // { name: 'Reverse DNS Lookup', description: 'Find the domain associated with an IP address.', icon: Globe, badge: 'Free' },
      // { name: 'WHOIS Lookup', description: 'Get domain registration details including owner and registrar.', icon: Globe, badge: 'Free' },
      // { name: 'Domain to IP', description: 'Resolve domain names to their respective IP addresses.', icon: Globe, badge: 'Popular' },
      // { name: 'SSL Certificate Checker', description: 'Check SSL validity, issuer, and expiry date.', icon: Shield, badge: 'Free' },
    ],
  },
  {
    category: 'Email Tools',
    tools: [{ name: 'Email Validation Tool', description: 'Verify if an email is correctly formatted and MX exists.', icon: Mail, badge: 'Coming soon', url: '/dns' }],
  },
]

const badgeColors: Record<string, string> = {
  Free: 'bg-green-100 text-green-800',
  New: 'bg-blue-100 text-blue-800',
  Popular: 'bg-yellow-100 text-yellow-800',
}

export default function WebToolsPage() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredTools = toolsData
    .filter((cat) => activeCategory === 'All' || cat.category === activeCategory)
    .map((cat) => ({
      ...cat,
      tools: cat.tools.filter((tool) => tool.name.toLowerCase().includes(search.toLowerCase())),
    }))
    .filter((cat) => cat.tools.length > 0)

  const categories = ['All', ...toolsData.map((c) => c.category)]

  return (
    <div className="container max-w-screen-lg mx-auto py-20 px-4">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-semibold mb-5">WebTools Suite</h1>
        {/* Breadcrumb */}
        <BreadCrumbForPage clasName="m-auto" />
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">All-in-one toolkit to monitor, check, and validate your website, domain, and emails.</p>
      </div>

      <Tabs value={activeCategory} onValueChange={setActiveCategory} className="mb-8">
        <TabsList className="justify-center flex mx-auto gap-2">
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat}>
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="flex justify-center mb-12">
        <Input type="text" placeholder="Search tools..." value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-md" icon={<Search className="w-4 h-4 text-muted-foreground" />} />
      </div>

      {filteredTools.map((category, idx) => (
        <section key={idx} className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8">{category.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.tools.map((tool, i) => {
              const Icon = tool.icon
              return (
                <Card key={i} className="hover:shadow-xl transition-all duration-300 rounded-2xl border border-border flex flex-col justify-between transform">
                  <CardHeader>
                    {tool.badge && <Badge className={`${badgeColors[tool.badge]} py-1 px-2 text-sm mb-2`}>{tool.badge}</Badge>}
                    <div className="flex gap-3">
                      <Icon className="w-6 h-6 text-primary" />
                      <CardTitle className="text-lg font-semibold text-foreground">{tool.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between mt-2">
                    <CardDescription className="text-muted-foreground mb-4">{tool.description}</CardDescription>
                    <Link href={tool.url}>
                      <Button variant="default" className="w-full mt-auto hover:bg-primary/90">
                        Use Tool
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
