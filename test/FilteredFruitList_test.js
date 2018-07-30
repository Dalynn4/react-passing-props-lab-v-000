import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import '../src/fetch-setup';
import FilteredFruitList from '../src/components/FilteredFruitList';

Enzyme.configure({ adapter: new Adapter() })

const Noop = () => (<p>Noop</p>);
const fruit = [
  { name: 'grapes',
    keywords: [ 'fruit', 'food', 'wine' ],
    char: '🍇',
    fruit_type: 'berry' },
  { name: 'green_apple',
    keywords: [ 'fruit', 'nature' ],
    char: '🍏',
    fruit_type: 'pome' },
  { name: 'apple',
    keywords: [ 'fruit', 'mac', 'school' ],
    char: '🍎',
    fruit_type: 'pome' },
  { name: 'peach',
    keywords: [ 'fruit', 'nature', 'food' ],
    char: '🍑',
    fruit_type: 'drupe' }
];

describe('<FilteredFruitList />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = !FilteredFruitList.prototype ? shallow(<Noop />) :
      shallow(<FilteredFruitList fruit={fruit} filter={null} />);
  });



});
