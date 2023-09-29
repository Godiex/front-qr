import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import {HttpService} from "@core/services/http.service";
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    TranslateModule.forRoot(),
  ],
  providers:[
    HttpService
  ]
})
export class FeatureModule { }
