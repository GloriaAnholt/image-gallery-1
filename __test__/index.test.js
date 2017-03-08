import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Gallery from '../src/GalleryView';
import List from '../src/ListView';
import Thumbnail from '../src/ThumbView';
import App from '../src/index';

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
]

describe('The Image Gallery React App', () => {

    it('Renders ths app', () => {
        const rendered = shallow(App);
        expect(toJson(rendered)).toMatchSnapshot();
    });

    // it('saves a snapshot of the Gallery view', () => {
    //     const rendered = <Gallery images={ images }/>
    //     expect(toJson(rendered)).toMatchSnapshot();
    // });

    // it('saves a snapshot of the List view', () => {
    //     const rendered = <List  images={ images }/>
    //     expect(toJson(rendered)).toMatchSnapshot();
    // });

    // it('saves a snapshot of the Thumb view', () => {
    //     const rendered = <Thumb  images={ images }/>
    //     expect(toJson(rendered)).toMatchSnapshot();
    // });
})