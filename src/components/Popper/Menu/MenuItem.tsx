import React from 'react'
import { MenuItemData } from '.'
import Button from '@/components/Button'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

export interface MenuItemProps {
  data: MenuItemData
  onClick: () => void
}

export function MenuItem({ data, onClick }: MenuItemProps) {
  return (
    <Button className={cx('menu-item')} to={data.to} leftIcon={data.icon} onClick={onClick}>
      {data.title}
    </Button>
  )
}
