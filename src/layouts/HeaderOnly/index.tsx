import React, { ReactNode } from 'react'
import Header from '@/layouts/components/Header'

export interface HeaderOnlyProps {
  children?: ReactNode
}

export function HeaderOnly({ children }: HeaderOnlyProps) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  )
}
