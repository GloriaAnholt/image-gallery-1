import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import ListView from './ListView';
import ThumbView from './ThumbView';
import GalleryView from './GalleryView';

const images = [
  {
    title: 'Rainbow frog',
    description: 'I\'m probably poisonious.',
    url: 'https://s-media-cache-ak0.pinimg.com/736x/bf/4e/40/bf4e4067252227bd3f758bba7dcee2ff.jpg'
  },
  {
    title: 'Green leaf frogs',
    description: 'We\'re so cute!',
    url: 'http://www.savethefrogs.com/amphibians/images/south-america/Hypsiboas-cinerascens-8a.jpg'
  },
  {
    title: 'Tree frog',
    description: 'Whaddya looking at buddy?',
    url: 'http://www.vorgee.com/sites/default/files/imagecache/left-col/Fun_Facts_Main_Frog.jpg'
  },
  {
    title: 'Toad',
    description: 'Bud. Bud. Bud.',
    url: 'http://www.defenders.org/sites/default/files/frog-kevin-clark-dpc.jpg'
  }
]

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
    return ( <ListView images={images} /> )
  } else if (props.view === 'thumb') {
    return ( <ThumbView images={images[0]} />)
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