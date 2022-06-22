import React, { ReactNode } from 'react'

export interface MenuProps {
  children: ReactNode
}

export default function Menu({ children }: MenuProps) {
  return <nav>{children}</nav>
}
