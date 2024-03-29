import images from '@/assets/images'
import Button from '@/components/Button'
import { InboxIcon, MessageIcon, UploadIcon } from '@/components/Icons'
import Image from '@/components/Image'
import Menu from '@/components/Popper/Menu'
import config from '@/config'
import { MenuItemData } from '@/models'
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react'
import classNames from 'classnames/bind'
import React from 'react'
import { Link } from 'react-router-dom'
import 'tippy.js/dist/tippy.css'
import Search from '../Search'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English'
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt'
        }
      ]
    }
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback'
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts'
  }
]

export default function Header() {
  const currentUser = true

  // Handle logic
  const handleMenuChange = (menuItem: MenuItemData) => {
    switch (menuItem?.type) {
      case 'language':
        // Handle change language
        break
      default:
    }
  }

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/@hoaa'
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin'
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: 'Settings',
      to: '/settings'
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true
    }
  ]

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Link to={config.routes.home} className={cx('logo-link')}>
          <img src={images.logo} alt="TikTok" />
        </Link>

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>

              <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button variant="text" onClick={() => {}}>
                Upload
              </Button>
              <Button variant="primary" onClick={() => {}}>
                Log in
              </Button>
            </>
          )}

          <Menu
            itemList={currentUser ? userMenu : MENU_ITEMS}
            hideOnClick={false}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.6435-1/152331202_1661459307347981_1863118736017890052_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=4X9JdDSrKiQAX8B1jja&_nc_ht=scontent.fsgn5-13.fna&oh=00_AT_Y9mR3OcNaLKL9ie5idCPTjhweFixD7p1qGQ-32VL4jg&oe=631F215E"
                alt="Cap Bao Dien"
                fallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/076270f9351cf25b27230101ee302467~c5_720x720.jpeg?x-expires=1655017200&x-signature=4nP%2FABaHgRxPtpLQa2sopuE3Lws%3D"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  )
}
