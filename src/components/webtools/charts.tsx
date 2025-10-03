'use client'

import { Area, AreaChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export const description = 'DNS Record Type Count'
export function ChartAreaLinear({ chartData }) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>DNS Record Count</CardTitle>
        <CardDescription>Static dummy data showing the count of each DNS record type</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="type" />
            <Tooltip />
            <Area type="monotone" dataKey="count" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
