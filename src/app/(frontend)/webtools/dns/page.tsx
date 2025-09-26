'use client'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Copy } from 'lucide-react'
import { BreadcrumbDemo } from '@/components/breadCrumbPage'

export default function DnsPage() {
  const [domain, setDomain] = useState('')
  const [records, setRecords] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const handleLookup = async () => {
    if (!domain) return
    setLoading(true)
    setRecords([])

    try {
      const res = await fetch(`https://thewinterlabs-webtools.onrender.com/dns/?payload=${domain}`)
      const data = await res.json()
      if (data.success) setRecords(data.records)
    } catch (error) {
      console.error('Error fetching DNS records:', error)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (value: string) => navigator.clipboard.writeText(value)

  const dnsTypeDescription: Record<string, string> = {
    A: 'Maps a domain to an IPv4 address',
    AAAA: 'Maps a domain to an IPv6 address',
    MX: 'Mail exchange server for the domain',
    TXT: 'Text information for various purposes',
    CNAME: 'Canonical name alias of the domain',
    NS: 'Nameserver for the domain',
  }

  return (
    <TooltipProvider>
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-screen-lg">
          <div className="mb-10 grid gap-4 text-center md:text-left md:grid-cols-2">
            <h1 className="text-h1">DNS Lookup</h1>
            <p className="text-body text-muted-foreground">Quickly retrieve DNS records for any domain. Supports A, AAAA, MX, TXT, CNAME, and NS records.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 p-6 bg-accent rounded-lg mb-8">
            <Input placeholder="Enter domain e.g. example.com" value={domain} onChange={(e) => setDomain(e.target.value)} className="flex-1 bg-white" />
            <Button onClick={handleLookup} disabled={loading}>
              {loading ? 'Looking up...' : 'Lookup'}
            </Button>
          </div>
          {records.length > 0 && (
            <div className="overflow-x-auto rounded-lg shadow">
              <Table className="min-w-full">
                <TableHeader>
                  <TableRow className="bg-gray-100 dark:bg-gray-800">
                    <TableHead>Type</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>TTL</TableHead>
                    <TableHead>Priority</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {records.map((record, idx) => {
                    const value = record.address || record.value || record.exchange
                    return (
                      <TableRow key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'}>
                        <TableCell>
                          <Tooltip>
                            <TooltipTrigger>
                              <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold cursor-help">{record.type}</span>
                            </TooltipTrigger>
                            <TooltipContent>{dnsTypeDescription[record.type] || 'DNS record'}</TooltipContent>
                          </Tooltip>
                        </TableCell>
                        <TableCell className="flex items-center gap-2">
                          <span>{value}</span>
                          <Button variant="outline" size="sm" className="p-1" onClick={() => copyToClipboard(value)}>
                            <Copy className="w-3 h-3" />
                          </Button>
                        </TableCell>
                        <TableCell>{record.ttl ?? '-'}</TableCell>
                        <TableCell>{record.priority ?? '-'}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </section>
    </TooltipProvider>
  )
}
