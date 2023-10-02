import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrRoutingModule } from './qr-routing.module';
import { QrRedirectComponent } from './qr-redirect/qr-redirect.component';
import { CompanyTitleComponent } from './qr-redirect/components/company-title/company-title.component';
import { CompanyInfoComponent } from './qr-redirect/components/company-info/company-info.component';
import { SharedModule } from "../../shared/shared.module";
import { SocialNetworksButtonComponent } from './qr-redirect/components/social-networks-button/social-networks-button.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [
    QrRedirectComponent,
    CompanyTitleComponent,
    CompanyInfoComponent,
    SocialNetworksButtonComponent
  ],
  imports: [
    CommonModule,
    QrRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class QrModule { }
