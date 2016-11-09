import { Vehicle } from './vehicle.js';

export class Car extends Vehicle {

  constructor(license, model, latLng) {
    super(license, model, latLng);
    this.miles = null;
    this.make = null;
  }

}
