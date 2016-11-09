import { Vehicle } from './vehicle.js';

export class Drone extends Vehicle {

  constructor(license, model, latLng) {
    super(license, model, latLng)
    this.airTimeHours = null;
    this.base = null;
  }

}
