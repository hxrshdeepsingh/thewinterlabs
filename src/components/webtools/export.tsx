'use client'

import { Button } from '../ui/button'
import { Download } from 'lucide-react'

export function Export({ data, fileName = 'dns-data.csv' }) {
  const exportCSV = () => {
    if (!data || !data.records || data.records.length === 0) return

    const headers = data.headers.join(',')

    const rows = data.records.map((r) => [r.type, r.value, r.ttl, r.priority].join(','))
    const csvContent = [headers, ...rows].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button variant="outline" className="flex items-center gap-2 mt-2 sm:mt-0 sm:ml-2 w-full sm:w-auto" onClick={exportCSV}>
      <Download className="w-4 h-4" /> Export Data
    </Button>
  )
}
