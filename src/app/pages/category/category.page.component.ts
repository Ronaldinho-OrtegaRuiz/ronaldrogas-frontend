import { Component } from '@angular/core';
import {BackofficeModule} from "../../backoffice/backoffice.module";

@Component({
  selector: 'page-category',
  standalone: true,
  imports: [
    BackofficeModule
  ],
  templateUrl: './category.page.component.html',
  styleUrl: './category.page.component.css'
})
export class CategoryPageComponent {

}
