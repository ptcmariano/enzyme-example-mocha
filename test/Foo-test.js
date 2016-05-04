import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Foo from '../src/Foo';

describe("Define element Foo", function() {
  it("should contains element div.bar", function() {
    expect(shallow(<Foo />).contains(<div className="bar" />)).to.equal(true);
  });

  it("contains className .foo count one", function() {
    expect(mount(<Foo />).find('.foo').length).to.equal(1);
  });

  it("should prop className equal foo", function() {
    expect(shallow(<Foo />).props().className).to.equal("foo");
  });

  it("should prop className of children equal bar", function() {
    expect(shallow(<Foo />).children().prop("className")).to.equal("bar");
  });
});
