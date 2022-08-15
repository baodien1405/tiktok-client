import React from 'react'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import Menu, { MenuItem } from './Menu'
import config from '@/config'
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon
} from '@/components/Icons'
import SuggestedAccount from '@/components/SuggestedAccount'

const cx = classNames.bind(styles)

export default function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem
          title="For You"
          to={config.routes.home}
          icon={<HomeIcon />}
          activeIcon={<HomeActiveIcon />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={<LiveIcon />}
          activeIcon={<LiveActiveIcon />}
        />
      </Menu>

      <SuggestedAccount label="Suggested accounts" />
      <SuggestedAccount label="Following accounts" />
    </aside>
  )
}
