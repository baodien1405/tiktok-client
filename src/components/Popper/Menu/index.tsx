import { Wrapper as PopperWrapper } from '@/components/Popper'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import React, { ReactElement, useState } from 'react'
import { Header } from './Header'
import styles from './Menu.module.scss'
import { MenuItem } from './MenuItem'

const cx = classNames.bind(styles)

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

export interface MenuProps {
  itemList: Array<MenuItemData>
  children: ReactElement
  // eslint-disable-next-line no-unused-vars
  onChange: (item: MenuItemData) => void
}

export function Menu({ children, itemList = [], onChange }: MenuProps) {
  const [history, setHistory] = useState([{ data: itemList }])

  const current = history[history.length - 1]

  const renderMenuItem = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev: any) => [...prev, item.children])
            } else {
              onChange(item)
            }
          }}
        />
      )
    })
  }

  return (
    <Tippy
      delay={[0, 700]}
      offset={[12, 8]}
      interactive={true}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title="Language"
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1))
                }}
              />
            )}
            {renderMenuItem()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  )
}
