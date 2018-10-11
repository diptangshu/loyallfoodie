import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { StoreListingComponent } from './store-listing/store-listing';
import { PointsDisplayComponent } from './points-display/points-display';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
	declarations: [StoreListingComponent,
		PointsDisplayComponent],
	imports: [IonicModule, RoundProgressModule, PipesModule],
	exports: [StoreListingComponent,
		PointsDisplayComponent]
})
export class ComponentsModule { }
