import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '@pets/core-data';

@Component({
  selector: 'pets-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent {
  @Input() pets: Pet[]
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
