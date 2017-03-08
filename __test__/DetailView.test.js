import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DetailView from '../src/DetailView';
import images from '../src/images.json'

describe('The Image Gallery React App', () => {

    it('compares a snapshot of the List view', () => {
        const rendered = <DetailView  images={ images }/>
        expect(toJson(rendered)).toMatchSnapshot();
    });

})