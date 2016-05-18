import test from 'ava';
import * as React from 'react';
import * as sinon from 'sinon';
import { mount, shallow, render } from 'enzyme';

import Hello from '../../../app/scripts/components/Hello';

const props = {
  compiler: 'cpl',
  framework: 'fw'
};

test('Class', t => {
  const wrapper = shallow(<Hello {...props} />);
  t.truthy(wrapper.find('.hello__header').length === 1);
});

test('Props', t => {
  const wrapper = shallow(<Hello {...props} />);
  t.truthy(wrapper.contains(<span>Hello from {props.compiler} and {props.framework}!</span>));
});
