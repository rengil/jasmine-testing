var jsdom = require('jsdom');

global.jsdom = jsdom.jsdom;
global.document = global.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.XMLHttpRequest = global.window.XMLHttpRequest;

var mock = require('mock-require');
var proxyquire = require('proxyquire');
var mixpanelMock = jasmine.createSpyObj('mixpanel', ['init', 'track']);

var map = proxyquire('./map', {
  'mixpanel-browser': mixpanelMock,
});

describe('get zoom', function () {

  it('given my zoom is 10, then my get zoom should return 10', function () {
    map.setZoom(10);
    expect(map.getZoom()).toEqual(10);
  }
);
});

describe('set zoom', function () {

  it('if zoom argument is null, my zoom should not change', function () {
    map.setZoom(10);
    map.setZoom();
    expect(map.getZoom()).toEqual(10);
  });

  it('if higher than 20, set error', function () {
    map.setZoom(21);
    expect(map.error).toEqual('erro');
    expect(map.getZoom()).not.toEqual(21);
  });

  it('if range less than 0, set error', function () {
    map.setZoom(-1);
    expect(map.error).toEqual('erro');
    expect(map.getZoom()).not.toEqual(-1);
  });

});

describe('add points', function () {

  it('zoom should be 0 when adding point', function () {
    map.addPoints({point: 1});
  });

});
