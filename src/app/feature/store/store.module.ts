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
import { GoogleMapsModule } from '@angular/google-maps';
import { NgApexchartsModule } from "ng-apexcharts";
import { PdfViewerComponent } from './store/components/pdf-viewer/pdf-viewer.component';
import { ModalComponent } from './store/components/modal/modal.component';
import {PdfViewerModule} from "ng2-pdf-viewer";

@NgModule({
  declarations: [
    StoreComponent,
    DetailProductComponent,
    RecommendationsComponent,
    InformationProductComponent,
    HeaderComponent,
    PdfViewerComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MdbAccordionModule,
    MdbCarouselModule,
    TranslateModule.forRoot(),
    MdbCollapseModule,
    AccordionModule,
    GoogleMapsModule,
    NgApexchartsModule,
    PdfViewerModule
  ]
})
export class StoreModule { }
