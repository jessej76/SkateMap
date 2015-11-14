'use strict';

describe('Service: LocationFactory', function () {

  // load the service's module
  beforeEach(module('skateMapApp'));

  // instantiate service
  var LocationFactory;
  beforeEach(inject(function (_LocationFactory_) {
    LocationFactory = _LocationFactory_;
  }));

  it('should do something', function () {
    expect(!!LocationFactory).toBe(true);
  });

});
