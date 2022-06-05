import classNames from 'classnames/bind'
import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

export interface ButtonProps {
  to?: string
  href?: string
  variant?: 'primary' | 'outlined' | 'text' | 'string'
  size?: 'small' | 'medium' | 'large'
  rounded?: boolean
  disabled?: boolean
  className?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children: ReactNode
  onClick: () => void
}

export default function Button({
  to,
  href,
  variant = 'string',
  size = 'medium',
  rounded = false,
  disabled = false,
  className = '',
  leftIcon,
  rightIcon,
  children,
  onClick,
  ...passProps
}: ButtonProps) {
  let Comp: any = 'button'
  const props: any = {
    onClick,
    ...passProps
  }

  if (disabled) {
    Object.keys(props).forEach((key) => {
      console.log(key)
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key]
      }
    })
  }

  if (to) {
    props.to = to
    Comp = Link
  } else if (href) {
    props.href = href
    Comp = 'a'
  }

  const classes = cx('wrapper', {
    [className]: className,
    [variant]: [variant],
    [size]: [size],
    rounded,
    disabled
  })

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  )
}
