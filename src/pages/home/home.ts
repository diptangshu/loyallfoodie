import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore } from '@angular/fire/firestore';
import _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  storesByDistance = [];
  storesByRating = [];
  loading = true;


  constructor(public navCtrl: NavController, private db: AngularFirestore) {
  }

  ngOnInit() {
    this.db.collection('/stores').valueChanges().subscribe(stores => {
      this.storesByDistance = _.sortBy(stores, 'distance');
      this.storesByRating = _.orderBy(stores, 'rating', 'desc');
      this.loading = false;
    });
  }

}
