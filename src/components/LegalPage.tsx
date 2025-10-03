import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export function LegalPage({ title, sections }) {
  return (
    <section className="bg-accent">
      <div className="max-w-screen-lg mx-auto py-20">
        <Card className="rounded-2xl shadow-md">
          <CardHeader>
            <CardTitle>
              <h1 className='text-4xl tracking-tight md:text-5xl lg:text-h1 font-semibold'>{title}</h1>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {sections.map((section, i) => (
              <div key={i}>
                <h3 className="font-semibold text-lg">{section.heading}</h3>
                <p className="text-muted-foreground">{section.text}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
