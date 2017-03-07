import React from 'react';

export default function ThumbView(props) {
// "thumbnail" - the image as a "thumbnail" (within a 100x100 pixel scale) and the title . 
  return (
      <div>
        <h2>Thumb View</h2>
        <img src={props.images.url} alt={props.images.title} height="100" width="100" />
        <p>{props.images.title}</p>
      </div>
  )
}