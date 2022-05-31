import React, { ReactNode } from 'react'
import styles from './Popper.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export interface WrapperProps {
  children: ReactNode
}

export function Wrapper({ children }: WrapperProps) {
  return <div className={cx('wrapper')}>{children}</div>
}
