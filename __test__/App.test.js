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

})