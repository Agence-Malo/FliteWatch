'use client'

import { HeroUIProvider as UIProvider } from "@heroui/react"

const HeroUIProvider = ({ children }: { children: React.ReactNode }) => (
  <UIProvider>{children}</UIProvider>
)

export default HeroUIProvider
