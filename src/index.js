import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import './index.css';


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