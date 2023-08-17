import React, { useState } from 'react'

import { ReactSlider } from 'react-slider'
import 'react-slider/dist/index.css'
const imagesArr = [
  { src: 'https://picsum.photos/200/300' },
  { src: 'https://picsum.photos/100/200' }
]
const App = () => {
  const [isOpen, setState] = useState(true)

  const onClose = () => {
    console.log('here===')
    // called when onClose method triggers i.e. when modal is closed
    setState(false)
  }

  return (
    <>
      <div style={{ width: '400px', height: '400px' }}>
        <ReactSlider
          images={imagesArr}
          imageSrcKey={'src'}
          imageAltKey={'src'}
          onClose={onClose}
          isOpen={isOpen}
        />
      </div>
      <button onClick={() => setState((preState) => !preState)}>
        SHow/Hide
      </button>
    </>
  )
}

export default App
