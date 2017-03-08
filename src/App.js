import React, { Component } from 'react';
import './index.css';
import DetailView from './DetailView';
import ThumbView from './ThumbView';
import GalleryView from './GalleryView';
import AddImage from './AddImage';
import imageArray from './images.json';


function SelectorButtons(props) {
  return (
    <div>
      <p>Select a view type</p>
      <button onClick={ () => props.setView('detail') }>Detail view</button>
      <button onClick={ () => props.setView('thumb') }>Thumbnail view</button>
      <button onClick={ () => props.setView('gallery') }>Gallery view</button>
    </div>
  )
}

function SelectView(props) {
  let components = { 'detail': DetailView, 'thumb': ThumbView, 'gallery': GalleryView }
  let Selected = components[props.view];
  return ( <Selected images={ props.images } /> )
}

SelectView.propTypes = {
  images: React.PropTypes.array
}

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'thumb',
      images: imageArray
    }
    this.setView = this.setView.bind(this);
    this.addImage = this.addImage.bind(this);
  }

  setView(selection) {
    this.setState({ view: selection })
  }

  addImage(image) {
    let updatedImages = this.state.images.slice();
    updatedImages.push(image);
    console.log('the new images array is ', updatedImages);
    this.setState({ images: updatedImages })
  }

  render() {
    return (
      <div>
        <SelectorButtons setView={ this.setView } />
        <AddImage addImage={ this.addImage } /> 
        <SelectView view={ this.state.view } images={ this.state.images } /> 
      </div>
    )
  }
}