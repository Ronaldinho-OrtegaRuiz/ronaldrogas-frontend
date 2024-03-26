import {Component, Input} from '@angular/core';

@Component({
  selector: 'backoffice-title-description',
  templateUrl: './title-description.component.html',
  styleUrl: './title-description.component.css'
})
export class TitleDescriptionComponent {

  @Input() title!: string;
  @Input() description!: string;

}
