import React, { ReactNode } from 'react'
import { UiContextProvider } from './UiContext'

interface Props {
  children: ReactNode
}

export function StoreProvider({ children }: Props) {
  return (
    <UiContextProvider>
      {children}
    </UiContextProvider>
  )
}
