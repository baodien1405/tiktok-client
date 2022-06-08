import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

export interface HeaderProps {
  title: string
  onBack: () => void
}

export function Header({ title, onBack }: HeaderProps) {
  return (
    <header className={cx('header')}>
      <button className={cx('back-btn')} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <h4 className={cx('header-title')}>{title}</h4>
    </header>
  )
}
