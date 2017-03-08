import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Gallery from '../src/GalleryView';
import images from '../src/images.json'


describe('The Image Gallery React App', () => {

    it('compares a snapshot of the Gallery view', () => {
        const rendered = <Gallery images={ images }/>
        expect(toJson(rendered)).toMatchSnapshot();
    });

})