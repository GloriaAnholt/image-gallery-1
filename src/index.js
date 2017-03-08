import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import ListView from './ListView';
import ThumbView from './ThumbView';
import GalleryView from './GalleryView';
import images from './images.json';


function SelectorButtons(props) {
  return (
    <div>
      <p>Select a view type</p>
      <button value="list" onClick={ () => props.setView('list') }>List view</button>
      <button value="thumb" onClick={ () => props.setView('thumb') }>Thumbnail view</button>
      <button value="gallery" onClick={ () => props.setView('gallery') }>Gallery view</button>
    </div>
  )
}

function SelectView(props) {
  if (props.view === 'list') {
    return ( <ListView images={images} /> )
  } else if (props.view === 'thumb') {
    return ( <ThumbView images={images} />)
  } else if (props.view === 'gallery') {
    return ( <GalleryView images={images} /> ) 
  }
}

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'list'
    }
    this.setView = this.setView.bind(this);
  }

  setView(selection) {
    this.setState({ view: selection })
  }

  render() {
    return (
      <div>
        <SelectorButtons setView={ this.setView } />
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