import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ThumbView from '../src/ThumbView';
import images from '../src/images.json'


describe('The Image Gallery React App', () => {

    it('compares a snapshot of the Thumb view', () => {
        const rendered = <ThumbView  images={ images }/>
        expect(toJson(rendered)).toMatchSnapshot();
    });

})