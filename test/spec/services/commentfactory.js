'use strict';

describe('Service: CommentFactory', function () {

  // load the service's module
  beforeEach(module('skateMapApp'));

  // instantiate service
  var CommentFactory;
  beforeEach(inject(function (_CommentFactory_) {
    CommentFactory = _CommentFactory_;
  }));

  it('should do something', function () {
    expect(!!CommentFactory).toBe(true);
  });

});
