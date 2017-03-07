import React from 'react';

export default function ThumbView(props) {
// "thumbnail" - the image as a "thumbnail" (within a 100x100 pixel scale) and the title . 
  const imagesHtml = props.images.map((image, i) => {
      let key = i + image.title;
      return (
      <div key={ key }>
        <img src={ image.url } alt={ image.title } height="100" width="100" />
        <p>{ image.title }</p>
      </div>
  )
  })
  return (
      <div>
        <h2>Thumb View</h2>
        { imagesHtml }
      </div>
  )
}