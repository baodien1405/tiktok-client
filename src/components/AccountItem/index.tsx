import Image from '@/components/Image'
import { SearchResult } from '@/models'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import React from 'react'
import styles from './AccountItem.module.scss'
import { Link } from 'react-router-dom'

export interface AccountItemProps {
  data: SearchResult
}

const cx = classNames.bind(styles)

export function AccountItem({ data }: AccountItemProps) {
  return (
    <Link to={`@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  )
}
