import classNames from 'classnames/bind'
import styles from './SuggestedAccount.module.scss'
import AccountItem from './AccountItem'

const cx = classNames.bind(styles)

export interface SuggestedAccountProps {
  label: string
}

function SuggestedAccount({ label }: SuggestedAccountProps) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>

      <AccountItem />
      <AccountItem />
      <AccountItem />

      <p className={cx('more-btn')}>See all</p>
    </div>
  )
}

export default SuggestedAccount
