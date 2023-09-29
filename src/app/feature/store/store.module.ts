import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store/store.component';
import { DetailProductComponent } from './store/components/detail-product/detail-product.component';
import { RecommendationsComponent } from './store/components/recommendations/recommendations.component';
import { InformationProductComponent } from './store/components/information-product/information-product.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';


@NgModule({
  declarations: [
    StoreComponent,
    DetailProductComponent,
    RecommendationsComponent,
    InformationProductComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MdbAccordionModule
  ]
})
export class StoreModule { }
