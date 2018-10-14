import { Component, Input } from '@angular/core';
import { StorePage } from '../../pages/store/store';

@Component({
  selector: 'store-listing',
  templateUrl: 'store-listing.html'
})
export class StoreListingComponent {

  @Input() heading: string;
  @Input() stores: any[];

  storePage = StorePage;

  constructor() {
  }
}
