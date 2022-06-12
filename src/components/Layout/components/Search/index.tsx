import { AccountItem } from '@/components/AccountItem'
import { SearchIcon } from '@/components/Icons'
import { Wrapper as PopperWrapper } from '@/components/Popper'
import useDebounce from '@/hooks/useDebounce'
import { SearchResult } from '@/models'
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Search.module.scss'

const cx = classNames.bind(styles)

export function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState<Array<SearchResult>>([])
  const [showResult, setShowResult] = useState(true)
  const [loading, setLoading] = useState(false)

  const debounced = useDebounce(searchValue, 500)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([])
      return
    }
    setLoading(true)
    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
        debounced
      )}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log('Failed to fetch data: ', error)
        setLoading(false)
      })
  }, [debounced])

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
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
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
        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  )
}
