import { HeaderOnly } from '@/layouts'
import config from '@/config'
import Following from '@/pages/Following'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import Search from '@/pages/Search'
import Upload from '@/pages/Upload'
import Live from '@/pages/Live'
import React, { ReactNode } from 'react'

interface PublicRoute {
  path: string
  component: React.FC
  layout?: ReactNode | React.FC
}

export const publicRoutes: Array<PublicRoute> = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.live, component: Live },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null }
]

export const privateRoutes = []
