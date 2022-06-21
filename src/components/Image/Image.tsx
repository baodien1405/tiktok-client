import React, { forwardRef, useState } from 'react'
import classNames from 'classnames'
import styles from './Image.module.scss'
import images from '@/assets/images'

export interface ImageProps {
  src: string
  alt: string
  fallback?: string
  className?: string
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, fallback: customFallback = images.noImage, className, ...props }, ref) => {
    const classes = classNames(styles.wrapper, className)
    const [fallback, setFallback] = useState('')

    const handleError = () => {
      setFallback(customFallback)
    }

    return (
      <img
        ref={ref}
        className={classes}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    )
  }
)

export default Image
