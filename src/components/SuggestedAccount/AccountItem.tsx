import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import { Placement } from 'tippy.js'
import classNames from 'classnames/bind'

import Image from '@/components/Image'
import { Wrapper as PopperWrapper } from '@/components/Popper'
import styles from './SuggestedAccount.module.scss'
import AccountPreview from './AccountPreview'

const cx = classNames.bind(styles)

function AccountItem() {
  const renderPreview = (attrs: {
    'data-placement': Placement
    'data-reference-hidden'?: string
    'data-escaped'?: string
  }) => (
    <div tabIndex={-1} {...attrs}>
      <PopperWrapper className={cx('menu-popper')}>
        <AccountPreview />
      </PopperWrapper>
    </div>
  )

  return (
    <Tippy interactive offset={[-20, 0]} delay={[800, 0]} placement="bottom" render={renderPreview}>
      <div className={cx('account-item')}>
        <Image
          className={cx('avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1660719600&x-signature=lqr%2FKvoBC3jHmQ%2Fklv0Eue0HS0o%3D"
          alt=""
        />

        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>baodien1405</strong>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
          </p>
          <p className={cx('name')}>Điền Cáp Bảo</p>
        </div>
      </div>
    </Tippy>
  )
}

export default AccountItem
