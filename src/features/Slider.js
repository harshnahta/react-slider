/** @format */
import React, { useCallback, useEffect, useRef, useState } from 'react'
const Slider = ({
  styles,
  imageBlock,
  sliderIndex,
  zoomIndex,
  setData,
  isAutoSlide,
  autoSlideDuration
}) => {
  const [isAutoStart, isAutoStartSet] = useState(false)
  const started = useRef({ started: false, timeout: null })

  const moveSlide = useCallback((key, isRestartTimer = true) => {
    setData((preState) => {
      const childLength = imageBlock.current.children.length
      let value = preState.sliderIndex
      if (key === 'next') {
        if (childLength - 1 === value) {
          value = 0
        } else {
          value += 1
        }
      } else {
        if (value === 0) {
          value = childLength - 1
        } else {
          value -= 1
        }
      }
      const obj = {
        sliderIndex: value
      }
      if (zoomIndex !== 0) obj.zoomIndex = 0
      return {
        ...preState,
        ...obj
      }
    })
    if (isRestartTimer) {
      startAutoSliding()
    }
  }, [])

  const startAutoSliding = useCallback(() => {
    clearTimeout(started.current.timeout)
    if (started.current.started) {
      started.current.timeout = setTimeout(() => {
        moveSlide('next', false)
        startAutoSliding()
      }, autoSlideDuration)
    }
  }, [started, moveSlide, autoSlideDuration])

  useEffect(() => {
    if (isAutoStart && !started.current.started) {
      started.current.started = true
      startAutoSliding()
    }
  }, [isAutoStart, startAutoSliding])

  useEffect(() => {
    isAutoStartSet(isAutoSlide)
    if (!isAutoSlide) {
      started.current.started = false
      clearTimeout(started.current.timeout)
    }
  }, [isAutoSlide])

  return (
    <React.Fragment>
      <button
        onClick={() => moveSlide('pre')}
        type='button'
        className={`${styles.navBtn} ${styles.prev}`}
        aria-label='Previous image'
        title='Previous image'
      />
      <button
        onClick={() => moveSlide('next')}
        type='button'
        className={`${styles.navBtn} ${styles.next}`}
        aria-label='Next image'
        title='Next image'
      />
    </React.Fragment>
  )
}
export default Slider
