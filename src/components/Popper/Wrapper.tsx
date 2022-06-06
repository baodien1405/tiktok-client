import React, { ReactNode } from 'react'
import styles from './Popper.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export interface WrapperProps {
  className?: string
  children: ReactNode
}

export function Wrapper({ children, className }: WrapperProps) {
  return <div className={cx('wrapper', className)}>{children}</div>
}
