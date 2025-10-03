import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export function ResultTable({ title, domain, tableData }) {
  const tableDataHeader = tableData.headers
  const tableDataResult = tableData.records

  return (
    <Card className="rounded-xl shadow-md hover:shadow-xl transition overflow-x-auto w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          Results for domain: <span className="font-medium">{domain}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table className="min-w-full">
          <TableHeader>
            <TableRow className="bg-gray-100 dark:bg-gray-800">
              {tableDataHeader.map((header, index) => (
                <TableHead key={index}>{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableDataResult.map((record, index) => {
              const value = record.address || record.value || record.exchange || '-'
              return (
                <TableRow key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50 dark:bg-gray-900'}>
                  <TableCell>
                    <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">{record.type}</span>
                  </TableCell>
                  <TableCell>{value}</TableCell>
                  <TableCell>{record.ttl ?? '-'}</TableCell>
                  <TableCell>{record.priority ?? '-'}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
