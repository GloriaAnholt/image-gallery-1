import React from 'react';

export default function ListView(props) {
// "list" - display the title of the image, the link (not the  actual image), and description.  
    return (
        <div>
            <h3>{ props.image.title }</h3>
            <p>{ props.image.description }</p>
            <p>{ props.image.url }</p>
        </div>
    )
}