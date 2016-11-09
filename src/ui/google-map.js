import { BaseElement } from './base-element.js';

export class GoogleMap extends BaseElement {

  constructor(centerOfMap, data) {
    super();
    this.centerOfMap = centerOfMap;
    this.data = data;
  }

  createElement() {
    super.createElement();

    setTimeout(() => {
      var map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: this.centerOfMap
      });

      for (let vehicle of this.data) {
        let [lat, lng] = vehicle.latLng.split(' ');
        let myLatLng = new window.google.maps.LatLng(lat, lng);

        var marker = new window.google.maps.Marker({
          position: myLatLng,
          map: map
        });

        marker.setMap(map);
      }

    }, 0);
  }

  getElementString() {
    return `<div style="width:800px; height:400px;" id="map"></div>`;
  }
}
