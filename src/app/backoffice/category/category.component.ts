import { Component } from '@angular/core';
import {TitleDescriptionComponent} from "../title-description/title-description.component";

@Component({
  selector: 'backoffice-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  title = 'Categoría';
  description = 'Aquí se pueden gestionar las categorías de productos.';
}
