import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarsListPage } from './cars-list';

@NgModule({
  declarations: [
    CarsListPage,
  ],
  imports: [
    IonicPageModule.forChild(CarsListPage),
  ],
})
export class CarsListPageModule {}
