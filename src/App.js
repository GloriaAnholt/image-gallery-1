import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import DetailView from './DetailView';
import ThumbView from './ThumbView';
import GalleryView from './GalleryView';
import images from './images.json';


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
  return ( <Selected images={images} /> )
}

SelectView.propTypes = {
  images: React.PropTypes.array
}

export default class ImageGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'thumb'
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