import { AccountItem } from '@/components/AccountItem'
import { SearchIcon } from '@/components/Icons'
import { Wrapper as PopperWrapper } from '@/components/Popper'
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Search.module.scss'

const cx = classNames.bind(styles)

export function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState<any>([])
  const [showResult, setShowResult] = useState(true)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3])
    }, 0)
  }, [])

  const handleClear = () => {
    setSearchValue('')
    setSearchResult([])
    inputRef.current?.focus()
  }

  const handleHideResult = () => {
    setShowResult(false)
  }

  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0}
      interactive={true}
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex={-1} {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Account</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          placeholder="Search accounts and videos"
          spellCheck={false}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  )
}
