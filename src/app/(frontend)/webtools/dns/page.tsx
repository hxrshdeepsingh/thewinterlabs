'use client'

import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Download, Search, Settings, Lightbulb } from 'lucide-react'
import { ChartAreaLinear } from '@/components/webtools/charts'
import { Hero } from '@/components/webtools/hero'
import { Cards } from '@/components/webtools/cards'
import { ResultTable } from '@/components/webtools/table'
import { useServices } from '@/lib/useServices'
import { Export } from '@/components/webtools/export'

export default function Page() {
  const [domain, setDomain] = useState('google.com')
  const [DnsData, setDnsData] = useState({
    headers: ['Type', 'Value', 'TTL', 'Priority'],
    records: [],
    chartData: [],
  })
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    const result = await useServices('dns', domain)

    if (result?.success && result.records) {
      const formattedRecords = result.records.map((r) => ({
        type: r.type,
        value: r.address || r.value || r.exchange || r.nsname || '-',
        ttl: r.ttl ?? '-',
        priority: r.priority ?? '-',
      }))

      const countMap: Record<string, number> = {}
      formattedRecords.forEach((r) => {
        countMap[r.type] = (countMap[r.type] || 0) + 1
      })
      const chartData = Object.entries(countMap).map(([type, count]) => ({ type, count }))

      setDnsData({ headers: ['Type', 'Value', 'TTL', 'Priority'], records: formattedRecords, chartData })
    } else {
      setDnsData((prev) => ({ ...prev, records: [], chartData: [] }))
    }

    setLoading(false)
  }

  return (
    <section className="py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="container mx-auto max-w-screen-lg space-y-10">
        <Hero title="DNS Lookup" description="Look up DNS records for any domain, including A, MX, TXT, CNAME, and NS." badge="All services are live" />

        <Card className="flex flex-col sm:flex-row sm:items-center gap-4 p-4">
          <Input placeholder="Enter domain e.g. example.com" value={domain} onChange={(e) => setDomain(e.target.value)} icon={<Search className="w-4 h-4 text-muted-foreground" />} className="flex-1 bg-white" />
          <div className="flex flex-col sm:flex-row sm:gap-2 w-full sm:w-auto mt-2 sm:mt-0">
            <Button variant="default" className="w-full sm:w-auto" onClick={fetchData} disabled={loading}>
              {loading ? 'Loading...' : 'Search'}
            </Button>
            <Export data={DnsData} />
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-secondary/30 shadow p-4 rounded-lg">
          <div className="space-y-6 lg:col-span-1">
            <Cards title="How It Works" description="Enter your domain name and click 'Lookup'. The tool fetches DNS records and displays them in an easy-to-read table." icon={<Settings className="w-10 h-10 text-primary mt-1" />} />
            <Cards title="Tips" description="You can copy any record value by clicking the copy icon. Useful for email servers, verifying domains, and checking website configurations." icon={<Lightbulb className="w-10 h-10 text-yellow-500 mt-1" />} />
          </div>

          <div className="lg:col-span-2 space-y-6 flex flex-col items-center justify-center min-h-[300px]">
            <ResultTable title="DNS Records" domain={domain} tableData={DnsData} />
            <div className="w-full">
              <ChartAreaLinear chartData={DnsData.chartData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
