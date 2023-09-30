import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store/store.component';
import { DetailProductComponent } from './store/components/detail-product/detail-product.component';
import { RecommendationsComponent } from './store/components/recommendations/recommendations.component';
import { InformationProductComponent } from './store/components/information-product/information-product.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { TranslateModule } from '@ngx-translate/core';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { HeaderComponent } from './store/components/header/header.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    StoreComponent,
    DetailProductComponent,
    RecommendationsComponent,
    InformationProductComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    TranslateModule.forRoot(),
    MdbCollapseModule,
    AccordionModule
  ]
})
export class StoreModule { }
