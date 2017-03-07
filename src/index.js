import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css';


function SelectorButtons(props) {
    return (
      <div>
        <p>Select a view type</p>
        <button onClick={ () => props.ListView() }>List view</button>
        <button onClick={ () => props.ThumbView() }>Thumbnail view</button>
        <button onClick={ () => props.GalleryView() }>Gallery view</button>
      </div>
    )
  }

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'list'
    }
    this.ListView = this.ListView.bind(this);
    this.ThumbView = this.ThumbView.bind(this);
    this.GalleryView = this.GalleryView.bind(this);
  }

  ListView(props) {
    // "list" - display the title of the image, the link (not the  actual image), and description.  
    return (
      <h2>List View</h2>
    )
  }

  ThumbView(props) {
    // "thumbnail" - the image as a "thumbnail" (within a 100x100 pixel scale) and the title . 
    return (
      <h2>Thumb View</h2>
    )
  }

  GalleryView(props) {
    // "gallery" - Display the title, the full-size image, and the description. 
    return (
      <h2>Gallery View</h2>
    )
  }

  render() {
    return (
      <div>
        <SelectorButtons 
            ListView={ this.ListView }
            ThumbView={ this.ThumbView }
            GalleryView={ this.GalleryView } />
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