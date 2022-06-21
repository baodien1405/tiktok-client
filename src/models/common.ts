import { ReactElement } from 'react'

export interface MenuItemData {
  icon: ReactElement
  title: string
  to?: string
  children?: {
    title?: string
    data?: Array<any>
  }
  type?: string
  separate?: boolean
}
