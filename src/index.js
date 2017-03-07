import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css';


function SelectorButtons(props) {
  return (
    <div>
      <p>Select a view type</p>
      <button value="list" onClick={ () => props.onList() }>List view</button>
      <button value="thumb" onClick={ () => props.onThumb() }>Thumbnail view</button>
      <button value="gallery" onClick={ () => props.onGallery() }>Gallery view</button>
    </div>
  )
}

function SelectView(props) {
  if (props.view === 'list') {
    return ( <ListView /> )
  } else if (props.view === 'thumb') {
    return ( <ThumbView />)
  } else if (props.view === 'gallery') {
    return ( <GalleryView /> ) 
  }
}

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
    this.onList = this.onList.bind(this);
    this.onThumb = this.onThumb.bind(this);
    this.onGallery = this.onGallery.bind(this);
  }

  onList () {
    this.setState({ view: 'list'})
  }

  onThumb () {
    this.setState({ view: 'thumb'})
  }
  
  onGallery () {
    this.setState({ view: 'gallery'})
  }


  render() {
    return (
      <div>
        <SelectorButtons 
            onList={ this.onList }
            onThumb={ this.onThumb }
            onGallery={ this.onGallery } />
        <SelectView view={ this.state.view } /> 
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