import { HeaderOnly } from '@/components/Layout'
import routesConfig from '@/config/routes'
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
  { path: routesConfig.home, component: Home },
  { path: routesConfig.following, component: Following },
  { path: routesConfig.profile, component: Profile },
  { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
  { path: routesConfig.search, component: Search, layout: null }
]

export const privateRoutes = []
