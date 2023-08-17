import React from 'react'
import LoadSlider from './features'
import styles from './styles.module.css'

export const ReactSlider = ({
  sliderIndex = 0,
  images = [],
  imageSrcKey = 'src',
  imageAltKey = 'src',
  slideAnimationDuration = '600ms',
  objectFit = 'fill',
  imageBackgroundColor = 'rgba(0, 0, 0, 0.5)'
}) => {
  return (
    <LoadSlider
      styles={styles}
      sliderIndex={sliderIndex}
      images={images}
      imageSrcKey={imageSrcKey}
      imageAltKey={imageAltKey}
      slideAnimationDuration={slideAnimationDuration}
      objectFit={objectFit}
      imageBackgroundColor={imageBackgroundColor}
    />
  )
}
