import React from 'react';

export default function GalleryView(props) {
// "gallery" - Display the title, the full-size image, and the description.
  return (
      <div>
        <h2>Gallery View</h2>
        <img src={props.images.url} title={props.images.title} />
        <h3>{props.images.title}</h3>
        <p>{props.images.description}</p>
      </div>
  )
}