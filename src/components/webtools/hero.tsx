import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'
import { BreadCrumbForPage } from '../breadCrumbForPage'

export function Hero({ title, description, badge }) {
  return (
    <>
      <BreadCrumbForPage />
      <div className="mt-5 space-y-4 md:space-y-0 md:flex md:justify-between md:items-center">
        <div className="space-y-2 max-w-full md:max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-semibold">{title}</h1>
          <p className="text-muted-foreground text-body sm:text-lg">{description}</p>
        </div>
        <Badge variant="secondary" className="flex items-center gap-2 mt-3 md:mt-0">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-green-600 font-medium text-sm">{badge}</span>
        </Badge>
      </div>
      <Separator className="w-full h-[1px] bg-gray-200 dark:bg-gray-700" />
    </>
  )
}
