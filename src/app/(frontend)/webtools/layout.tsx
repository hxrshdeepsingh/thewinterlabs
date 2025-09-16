import { ReactNode } from 'react'
import { Card } from '@/components/ui/card'

export default function ToolsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen max-w-screen-lg mx-auto py-20">
      <main className="flex-1">
        <Card className="p-6">{children}</Card>
      </main>
    </div>
  )
}
