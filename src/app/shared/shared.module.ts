import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { GridListComponent } from './components/grid-list/grid-list.component';



@NgModule({
    declarations: [
        CardComponent,
        GridListComponent
    ],
  exports: [
    CardComponent,
    GridListComponent
  ],
    imports: [
        CommonModule,
        MatCardModule,
        MatGridListModule
    ]
})
export class SharedModule { }
