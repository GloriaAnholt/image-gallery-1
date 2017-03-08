import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ListView from '../src/ListView';
import images from '../src/images.json'

describe('The Image Gallery React App', () => {

    it('compares a snapshot of the List view', () => {
        const rendered = <ListView  images={ images }/>
        expect(toJson(rendered)).toMatchSnapshot();
    });

})