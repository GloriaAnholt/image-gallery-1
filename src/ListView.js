import React from 'react';

export default function ListView(props) {
// "list" - display the title of the image, the link (not the  actual image), and description.  
  const imagesHtml = props.images.map((image, i) => {
      let key = i + image.title;
      return (
          <div key={ key }>
              <h3>{ image.title }</h3>
              <p>{ image.description }</p>
              <p>{ image.url }</p>
          </div>
      )
  })
  
  return (
      <div>
        <h2>List View</h2>
        { imagesHtml }
      </div>
  )
}