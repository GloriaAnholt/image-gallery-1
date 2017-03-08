import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import SelectView from './SelectView';
import images from './images.json';


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
        <SelectView view={ this.state.view } images={images} /> 
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