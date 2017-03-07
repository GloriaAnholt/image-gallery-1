import React from 'react';

export default function GalleryView(props) {
// "gallery" - Display the title, the full-size image, and the description.
  const imagesHtml = props.images.map((image, i) => {
      let key = i + image.title;
      return (
        <div key={ key }>
            <img src={ image.url } alt={ image.title } />
            <h3>{ image.title }</h3>
            <p>{ image.description }</p>
        </div>
      )
  })
  
  return (
      <div>
        <h2>Gallery View</h2>
        { imagesHtml }
      </div>
  )
}