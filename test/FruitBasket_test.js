import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import '../src/fetch-setup';
import FruitBasket from '../src/components/FruitBasket';

Enzyme.configure({ adapter: new Adapter() })

const Noop = () => (<p>Noop</p>);

describe('<FruitBasket />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = !FruitBasket.prototype ? shallow(<Noop />) :
      shallow(<FruitBasket  />);
  });


});
