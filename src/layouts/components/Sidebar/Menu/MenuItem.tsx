import React, { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Menu.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export interface MenuItemProps {
  title: string
  to: string
  icon: ReactNode
  activeIcon: ReactNode
}

export default function MenuItem({ title, to, icon, activeIcon }: MenuItemProps) {
  return (
    <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('active-icon')}>{activeIcon}</span>
      <span className={cx('title')}>{title}</span>
    </NavLink>
  )
}
