import React, { ReactNode } from 'react'
import Header from '@/components/Layout/components/Header'
import Sidebar from './Sidebar'

export interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  )
}
