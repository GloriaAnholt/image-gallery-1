import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css';


function ListView(props) {
  // "list" - display the title of the image, the link (not the  actual image), and description.  
  return (
    <h2>List View</h2>
  )
}

function ThumbView(props) {
  // "thumbnail" - the image as a "thumbnail" (within a 100x100 pixel scale) and the title . 
  return (
    <h2>Thumb View</h2>
  )
}

function GalleryView(props) {
  // "gallery" - Display the title, the full-size image, and the description. 
  return (
    <h2>Gallery View</h2>
  )
}

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'list'
    }
  }

  render() {
    return (
      <div>
        <p>there's a component</p>
      </div>
    )
  }
}


ReactDOM.render(
    <div>
      <h1>Image Gallery</h1>
      <ImageGallery />  
    </div>,
    document.getElementById('root')
)