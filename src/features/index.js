import React, { useEffect, useState, useRef } from 'react'
import Slider from './Slider'

const LoadSlider = (props) => {
  const {
    styles,
    sliderIndex = 0,
    images = [],
    imageSrcKey,
    imageAltKey,
    slideAnimationDuration,
    objectFit,
    imageBackgroundColor,
    isAutoSlide,
    autoSlideDuration
  } = props
  const imageBlock = useRef()
  const screen = useRef()

  const [data, setData] = useState({
    sliderIndex: sliderIndex,
    xCursor: 0,
    yCursor: 0,
    xImgEle: 0,
    yImgEle: 0
  })

  const transformImage = (imgBlock, animation = true) => {
    const width = imgBlock.clientWidth * data.sliderIndex + 1
    imgBlock.style.transform = `translate3d(-${width - 1}px, 0px, 0px)`
    imgBlock.style['transition-duration'] = `${
      animation ? slideAnimationDuration : '0'
    }`
    setTimeout(() => {
      imgBlock.style['transition-duration'] = `0ms`
    }, 300)
  }
  useEffect(() => {
    screen.current.style['background-color'] = imageBackgroundColor
  }, [])

  useEffect(() => {
    if (data.sliderIndex >= 0 && data.sliderIndex < images.length) {
      transformImage(imageBlock.current)
      setData((preState) => ({
        ...preState,
        zoomIndex: 0
      }))
      window.onresize = () => {
        transformImage(imageBlock.current, false)
      }
    } else {
      setData((preState) => ({
        ...preState,
        sliderIndex: 0
      }))
    }
    return () => {
      window.onresize = null
    }
  }, [data.sliderIndex])

  return (
    <div className={styles.Content} ref={screen}>
      <div className={styles.customSlider}>
        {images.length > 0 ? (
          <div className={styles.inner} ref={imageBlock}>
            {images.map((img, index) => {
              return (
                <div className={styles.image} key={index}>
                  <img
                    src={imageSrcKey ? img[imageSrcKey] : img}
                    alt={imageAltKey ? img[imageAltKey] : img}
                    style={{
                      objectFit: objectFit
                    }}
                  />
                </div>
              )
            })}
          </div>
        ) : (
          <div>
            <h1>Images not availabe!</h1>
          </div>
        )}

        <Slider
          styles={styles}
          imageBlock={imageBlock}
          sliderIndex={data.sliderIndex}
          zoomIndex={data.zoomIndex}
          setData={setData}
          isAutoSlide={isAutoSlide}
          autoSlideDuration={autoSlideDuration}
        />
      </div>
    </div>
  )
}

export default LoadSlider
