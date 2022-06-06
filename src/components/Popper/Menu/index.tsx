import { Wrapper as PopperWrapper } from '@/components/Popper'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import React, { ReactElement } from 'react'
import styles from './Menu.module.scss'
import { MenuItem } from './MenuItem'

const cx = classNames.bind(styles)

export interface MenuItemData {
  icon: ReactElement
  title: string
  to?: string
}

export interface MenuProps {
  itemList: Array<MenuItemData>
  children: ReactElement
}

export function Menu({ children, itemList }: MenuProps) {
  const renderMenuItem = () => {
    return itemList.map((item, index) => <MenuItem key={index} data={item} />)
  }

  return (
    <Tippy
      visible={true}
      delay={[0, 700]}
      interactive={true}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>{renderMenuItem()}</PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}
