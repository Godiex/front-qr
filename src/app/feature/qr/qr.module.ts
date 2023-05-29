import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QrRoutingModule } from './qr-routing.module';
import { QrUserComponent } from './views/qr-user/qr-user.component';
import { CompanyTitleComponent } from './views/qr-user/components/company-title/company-title.component';
import { CompanyInfoComponent } from './views/qr-user/components/company-info/company-info.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    QrUserComponent,
    CompanyTitleComponent,
    CompanyInfoComponent
  ],
  imports: [
    CommonModule,
    QrRoutingModule,
    SharedModule
  ]
})
export class QrModule { }
