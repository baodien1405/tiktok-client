import { ReactElement } from 'react'
import './GlobalStyles.scss'

export interface GlobalStylesProps {
  children: ReactElement
}

export default function GlobalStyles({ children }: GlobalStylesProps) {
  return children
}
