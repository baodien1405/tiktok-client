import React from 'react'
import { MenuItemData } from '.'
import Button from '@/components/Button'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

export interface MenuItemProps {
  data: MenuItemData
}

export function MenuItem({ data }: MenuItemProps) {
  return (
    <Button className={cx('menu-item')} to={data.to} leftIcon={data.icon}>
      {data.title}
    </Button>
  )
}
