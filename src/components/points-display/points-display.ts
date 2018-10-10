import { Component } from '@angular/core';

/**
 * Generated class for the PointsDisplayComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'points-display',
  templateUrl: 'points-display.html'
})
export class PointsDisplayComponent {

  text: string;

  constructor() {
    console.log('Hello PointsDisplayComponent Component');
    this.text = 'Hello World';
  }

}
