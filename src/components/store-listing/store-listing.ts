import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'store-listing',
  templateUrl: 'store-listing.html'
})
export class StoreListingComponent implements OnInit {

  @Input() heading: string;
  @Input() stores = [1, 2, 3, 4, 5];
  
  numStoresPerView: number;

  constructor() {
  }

  ngOnInit() {
    this.numStoresPerView = Math.min(this.stores.length, 2);
  }

}
