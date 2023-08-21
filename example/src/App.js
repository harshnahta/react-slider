import React, { useState } from 'react'

import { ReactSlider } from 'react-image-slider-js'
import 'react-image-slider-js/dist/index.css'
const imagesArr = [
  { src: 'https://picsum.photos/200/300' },
  { src: 'https://picsum.photos/100/200' },
  { src: 'https://picsum.photos/400/400' },
  { src: 'https://picsum.photos/400/450' }
]
const App = () => {
  const [isAutoSlide, setIsAutoSlide] = useState(true)

  return (
    <>
      <div style={{ width: '400px', height: '400px' }}>
        <ReactSlider
          images={imagesArr}
          imageSrcKey={'src'}
          imageAltKey={'src'}
          slideAnimationDuration={'1s'}
          isAutoSlide={isAutoSlide}
          autoSlideDuration={3000}
        />
      </div>
      <button onClick={() => setIsAutoSlide((preState) => !preState)}>
        Auto Slide Start/Stop : {isAutoSlide ? 'Started' : 'Stopped'}
      </button>
    </>
  )
}

export default App
