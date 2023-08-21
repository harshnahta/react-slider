import React, { useMemo } from 'react'
import LoadSlider from './features'
import styles from './styles.module.css'

export const ReactSlider = ({
  sliderIndex = 0,
  images = [],
  imageSrcKey = 'src',
  imageAltKey = 'src',
  slideAnimationDuration = '600ms',
  objectFit = 'fill',
  imageBackgroundColor = 'rgba(0, 0, 0, 0.5)',
  isAutoSlide = false,
  autoSlideDuration = 4000
}) => {
  const loadSlider = useMemo(
    () => (
      <LoadSlider
        styles={styles}
        sliderIndex={sliderIndex}
        images={images}
        imageSrcKey={imageSrcKey}
        imageAltKey={imageAltKey}
        slideAnimationDuration={slideAnimationDuration}
        objectFit={objectFit}
        imageBackgroundColor={imageBackgroundColor}
        isAutoSlide={isAutoSlide}
        autoSlideDuration={autoSlideDuration}
      />
    ),
    [isAutoSlide, autoSlideDuration]
  )

  return loadSlider
}
