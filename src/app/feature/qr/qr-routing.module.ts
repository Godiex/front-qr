import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QrUserComponent} from "./views/qr-user/qr-user.component";

const routes: Routes = [
  { path: 'redirect', component: QrUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QrRoutingModule { }
