/// <reference path="../../../node_modules/ava/index.d.ts" />

import test from 'ava';
import * as React from 'react';
import * as sinon from 'sinon';
import { mount, shallow, render } from 'enzyme';

import Hello, { IPropTypes } from '../../../app/scripts/components/Hello';

const props: IPropTypes = {
  compiler: 'cpl',
  framework: 'fw'
};

test('Class', (t) => {
  const wrapper = shallow(<Hello {...props} />);
  t.truthy(wrapper.find('.hello__header').length === 1);
});

test('Props', t => {
  const wrapper = mount(<Hello {...props} />);
  const { compiler, framework }: IPropTypes = wrapper.props();
  t.deepEqual(compiler, props.compiler);
  t.deepEqual(framework, props.framework);
});
