import React from'react';
import { expect } from 'chai';
import Enzyme, { shallow } from'enzyme';
import Adapter from 'enzyme-adapter-react-16';


import '../src/fetch-setup';
import App from'../src/components/App';

Enzyme.configure({ adapter: new Adapter() })

const Noop = () => (<p>Noop</p>);

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = !App.prototype ? shallow(<Noop />) :
      shallow(<App />);
  });


});
