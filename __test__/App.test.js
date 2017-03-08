import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ImageGallery from '../src/App';


describe('The Image Gallery React App', () => {

    it('Renders ths app', () => {
        const rendered = shallow(<ImageGallery />);
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