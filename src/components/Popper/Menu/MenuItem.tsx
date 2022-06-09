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
  const classes = cx('menu-item', {
    separate: data.separate
  })

  return (
    <Button className={classes} to={data.to} leftIcon={data.icon} onClick={onClick}>
      {data.title}
    </Button>
  )
}
