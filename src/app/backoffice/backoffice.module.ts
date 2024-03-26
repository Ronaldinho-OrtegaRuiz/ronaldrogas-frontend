import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryComponent} from "./category/category.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {TitleDescriptionComponent} from "./title-description/title-description.component";



@NgModule({
  declarations: [
    CategoryComponent,
    DashboardComponent,
    TitleDescriptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CategoryComponent,
    DashboardComponent,
    TitleDescriptionComponent
  ]
})
export class BackofficeModule { }
