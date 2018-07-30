import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import sinon from 'sinon';

import '../src/fetch-setup';
import Filter from '../src/components/Filter';

Enzyme.configure({ adapter: new Adapter() })

const Noop = () => (<p>Noop</p>);
const filters = [ 'filter1', 'filter2', 'filter3' ];

describe('<Filter />', () => {
  let spy = sinon.spy();
  let wrapper;

  beforeEach(() => {
    wrapper = !Filter.prototype ?
      shallow(<Noop />) : shallow(<Filter filters={filters} handleChange={spy}/>);
  });


});
