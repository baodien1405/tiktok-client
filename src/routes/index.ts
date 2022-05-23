import { HeaderOnly } from '@/components/Layout'
import Following from '@/pages/Following'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import Search from '@/pages/Search'
import Upload from '@/pages/Upload'
import React, { ReactNode } from 'react'

interface PublicRoute {
  path: string
  component: React.FC
  layout?: ReactNode | React.FC
}

export const publicRoutes: Array<PublicRoute> = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null }
]

export const privateRoutes = []
