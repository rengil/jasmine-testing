import mixpanel from 'mixpanel-browser';

var map = {
  zoom: 0,
  points: [],
  error: '',

  getZoom: function () {
    return this.zoom;
  },

  setZoom: function (zoomNumber) {
    console.log(mixpanel);
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
