'use client'

import { Switch } from '@/components/ui/switch'
import { Sun, Moon } from 'lucide-react'
import * as React from 'react'

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <div className="flex items-center space-x-2">
      <Sun className="h-4 w-4" />
      <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={setIsDarkMode} />
      <Moon className="h-4 w-4" />
    </div>
  )
}

export default ThemeToggle
