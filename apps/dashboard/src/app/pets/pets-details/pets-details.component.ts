import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '@pets/core-data';

@Component({
  selector: 'pets-pets-details',
  templateUrl: './pets-details.component.html',
  styleUrls: ['./pets-details.component.css']
})
export class PetsDetailsComponent {
  currentPet: Pet;
  originalTitle;
  @Input() set pet(value) {
    if (value) this.originalTitle = value.title;
    this.currentPet = Object.assign({}, value);
  }

  @Input() form;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
