import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QrRedirectComponent} from "./qr-redirect/qr-redirect.component";

const routes: Routes = [
  { path: '', component: QrRedirectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrRoutingModule { }
