import React from 'react';
import ListView from './ListView';
import ThumbView from './ThumbView';
import GalleryView from './GalleryView';

export default function SelectView(props) {
  
  if (props.view === 'list') {

    const imagesHtml = props.images.map((image, i) => {
        let key = i + image.title;
        return ( <ListView key={ key } image={ image } /> )
    })
    console.log('imagesHtml ', imagesHtml);
    return ( { imagesHtml } );

  } else if (props.view === 'thumb') {
    return ( <ThumbView images={props.images} />)
  } else if (props.view === 'gallery') {
    return ( <GalleryView images={props.images} /> ) 
  }

}

