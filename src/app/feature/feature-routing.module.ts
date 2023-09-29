import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'qr', loadChildren:() => import('./qr/qr.module').then(m => m.QrModule) },
  { path: 'store', loadChildren:() => import('./store/store.module').then(m => m.StoreModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
