import { Component, Input } from '@angular/core';

@Component({
  selector: 'store-listing',
  templateUrl: 'store-listing.html'
})
export class StoreListingComponent {

  @Input() heading: string;
  @Input() stores: any[];

  constructor() {
  }
}
