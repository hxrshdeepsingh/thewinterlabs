import { Lightbulb } from 'lucide-react'
import { Card, CardTitle, CardDescription } from '../ui/card'

export function Cards({ title, description, icon }) {
  return (
    <Card className="p-4 rounded-xl shadow-sm hover:shadow-md transition flex gap-3 items-start">
      <Lightbulb className="w-10 h-10 text-primary mt-1" />
      <div>
        <CardTitle className="text-lg mb-1">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </Card>
  )
}
