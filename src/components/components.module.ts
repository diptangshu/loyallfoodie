import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { StoreListingComponent } from './store-listing/store-listing';
import { PointsDisplayComponent } from './points-display/points-display';
@NgModule({
	declarations: [StoreListingComponent,
    PointsDisplayComponent],
	imports: [IonicModule],
	exports: [StoreListingComponent,
    PointsDisplayComponent]
})
export class ComponentsModule {}
