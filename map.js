import mixpanel from 'mixpanel-browser';
import 'whatwg-fetch'

var map = {
  zoom: 0,
  points: [],
  error: '',

  getZoom: function () {
    return this.zoom;
  },

  getMyPoints: function () {
    fetch('http://www.mocky.io/v2/58f8e10c110000c21aa17582').then( function (response) {
      return response.json();
    }).then( function s(data) {
      console.log(data);
    });
  },

  setZoom: function (zoomNumber) {
    mixpanel.init('00e2097488b9674ea755829e8f099f11');
    mixpanel.track('teste: zoom');
    if (!zoomNumber) {
      return;
    }

    if (zoomNumber < 0 || zoomNumber > 20) {
      this.error = 'erro';
      return;
    }

    this.zoom = zoomNumber;
  },

  addPoints: function (point) {
    this.points.push(point);
    this.setZoom(0);
  },

};

module.exports = map;
