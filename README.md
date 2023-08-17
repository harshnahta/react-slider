<!-- @format -->

# react-image-slider-js

## Install

```bash
npm install --save react-image-slider-js
```

# React Image Slider js - User Manual and Updates

Welcome to React Image Slider js! This library empowers you with the flexibility to seamlessly integrate lightbox functionality into your React applications, allowing for manual management and customization based on your unique requirements. .

## Key Features:

- **Manual Control:** Take charge of your lightbox interactions and tailor them to your needs.
- **Ease of Use:** Effortlessly integrate and configure lightboxes with minimal setup.

## Getting Started:

To begin using React Image Slider js, follow these simple steps:

1. Install the package via npm or yarn:

   ```bash
   npm install react-image-slider-js
   ```

# React Image Slider js - CodeSandbox Example

Welcome to the React Image Slider js CodeSandbox example! In this sandbox, you can explore and interact with a live implementation of React Image Slider js. This example showcases how to integrate and customize lightbox functionality into a React application.

## Live Example:

Check out the live example on CodeSandbox: [![Live Example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-image-slider-js-mk6dq8)

## How to Use:

1. Open the [Live Example](https://codesandbox.io/s/react-image-slider-js-mk6dq8) on CodeSandbox.
2. Explore the implemented React components and code in the **src** directory.
3. Observe how the lightbox functionality is integrated and how the `imageBackgroundColor` option is used.
4. Make changes and experiment with the code to see how it affects the lightbox behavior and appearance.
5. Feel free to modify and adapt the example to your own projects.

## How to Use:

```jsx
import React, { Component } from 'react'

import { ReactSlider } from 'react-image-slider-js'
import 'react-image-slider-js/dist/index.css'

const imagesArr = [{ src: '1.png' }, { src: '2.png' }]

const Example = () => {
  return (
    <ReactSlider images={imagesArr} imageSrcKey={'src'} imageAltKey={'src'} />
  )
}
```

#### Options

| **Option**               | **Type** | **Default value**    | **Description**                                                          |
| :----------------------- | :------- | :------------------- | :----------------------------------------------------------------------- |
| `sliderIndex`            | `number` | 0                    | Selected index of slider                                                 |
| `images`                 | `array`  | []                   | Array of images                                                          |
| `imageSrcKey`            | `string` | 'src'                | key of image in array object. Provide empty eg. '' if it is simple array |
| `imageAltKey`            | `string` | 'src'                | image alt key                                                            |
| `slideAnimationDuration` | `string` | '600ms'              | Slider animation duration.                                               |
| `objectFit`              | `string` | `fill`               | Image object property style. i.e. cover,contain,fill etc.                |
| `imageBackgroundColor`   | `string` | 'rgba(0, 0, 0, 0.5)' | Background color of image container.                                     |

#### Example first: images having keys in array

```js
const Example = () => {
  return (
    <ReactSlider
      sliderIndex={0}
      images={[{ src: '1.png' }, { src: '2.png' }]}
      imageSrcKey={'src'}
      imageAltKey={'src'}
      slideAnimationDuration={'600ms'}
      imageBackgroundColor={'rgba(0, 0, 0, 0.9)'}
      objectFit={`fill`}
    />
  )
}
```

#### Example two: images having simple array

```js
const Example = () => {
  return (
    <ReactSlider
      sliderIndex={0}
      images={['1.png', '2.png']}
      imageSrcKey={''}
      imageAltKey={''}
      slideAnimationDuration={'600ms'}
      imageBackgroundColor={'rgba(0, 0, 0, 0.9)'}
      objectFit={`fill`}
    />
  )
}
```

## License

MIT © [Harsh Nahta] (https://github.com/harshnahta)
