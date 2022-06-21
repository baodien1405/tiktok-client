import { Wrapper as PopperWrapper } from '@/components/Popper'
import { MenuItemData } from '@/models'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import { ReactElement, useState } from 'react'
import { Placement } from 'tippy.js'
import { Header } from './Header'
import styles from './Menu.module.scss'
import { MenuItem } from './MenuItem'

const cx = classNames.bind(styles)

export interface History {
  title?: string
  data: Array<MenuItemData>
}

export interface MenuProps {
  itemList: Array<MenuItemData>
  children: ReactElement
  hideOnClick: boolean
  // eslint-disable-next-line no-unused-vars
  onChange: (item: MenuItemData) => void
}

export default function Menu({
  children,
  itemList = [],
  hideOnClick = false,
  onChange
}: MenuProps) {
  const [history, setHistory] = useState<Array<History>>([{ data: itemList }])
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

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1))
  }

  const renderResult = (attrs: {
    'data-placement': Placement
    'data-reference-hidden'?: string
    'data-escaped'?: string
  }) => (
    <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
      <PopperWrapper className={cx('menu-popper')}>
        {history.length > 1 && <Header title={current.title || ''} onBack={handleBack} />}
        <div className={cx('menu-body')}>{renderMenuItem()}</div>
      </PopperWrapper>
    </div>
  )

  // Reset to first page
  const handleReset = () => {
    setHistory((prev) => prev.slice(0, 1))
  }

  return (
    <Tippy
      delay={[0, 700]}
      offset={[12, 8]}
      hideOnClick={hideOnClick}
      interactive={true}
      placement="bottom-end"
      render={renderResult}
      onHide={handleReset}
    >
      {children}
    </Tippy>
  )
}
