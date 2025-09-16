'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function DnsPage() {
  const [domain, setDomain] = useState('')
  const [records, setRecords] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const handleLookup = async () => {
    if (!domain) return
    setLoading(true)
    setRecords([])

    try {
      const res = await fetch(`https://thewinterlabs-webtools.onrender.com/dns/${domain}`)
      const data = await res.json()
      if (data.success) {
        setRecords(data.records)
      }
    } catch (error) {
      console.error('Error fetching DNS records:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 bg-accent rounded-md shadow-md">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-2">DNS Lookup</h1>

      {/* Description */}
      <p className="mb-6 text-gray-700">
        Lookup DNS records (A, AAAA, MX, TXT, CNAME, NS) for any domain. Enter a domain name below
        to get detailed DNS information.
      </p>

      {/* Input and Button */}
      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Enter domain e.g. google.com"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
        <Button onClick={handleLookup} disabled={loading}>
          {loading ? 'Looking up...' : 'Lookup'}
        </Button>
      </div>

      {/* Results Table */}
      {records.length > 0 && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>TTL</TableHead>
              <TableHead>Priority</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((record, idx) => (
              <TableRow key={idx}>
                <TableCell>{record.type}</TableCell>
                <TableCell>{record.address || record.value || record.exchange}</TableCell>
                <TableCell>{record.ttl ?? '-'}</TableCell>
                <TableCell>{record.priority ?? '-'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {/* No results message */}
      {!loading && domain && records.length === 0 && (
        <p className="text-gray-500">No records found for this domain.</p>
      )}
    </div>
  )
}
