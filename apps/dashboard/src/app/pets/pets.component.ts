import { Component, OnInit } from '@angular/core';
import { Pet, PetsService, emptyPet, NotifyService } from '@pets/core-data';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'pets-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets$;
  selectedPet: Pet;
  form: FormGroup;

  constructor(
    private petsService: PetsService,
    private formBuilder: FormBuilder,
    private notify: NotifyService
  ) {}

  resetPet() {
    this.form.reset();
    this.selectPet(emptyPet);
  }

  ngOnInit() {
    this.getPets();
    this.initForm();
    this.resetPet();
  }

  selectPet(pet: Pet) {
    this.selectedPet = pet;
    this.form.patchValue(pet);
  }

  getPets() {
    this.pet$ = this.petsService.all();
  }

  savePet() {
    if (!this.form.value.id) {
      this.createPet();
    } else {
      this.updatePet();
    }
  }

  updatePet() {
    this.petsService.update(this.form.value).subscribe(() => {
      this.getPets();
      this.resetPet();
    });
    this.notify.notification(`You have updated ${this.form.value.type}`);
  }

  createPet() {
    this.petsService.create(this.form.value).subscribe(() => {
      this.getPets();
      this.resetPet();
    });
    this.notify.notification(`You have created ${this.form.value.type}`);
  }

  deletePet(pet) {
    this.petsService.delete(pet.id).subscribe(() => this.getPets());
    this.notify.notification(`You have deleted ${pet.type}`);
  }

  cancel() {
    this.resetPet();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: null,
      type: ['', Validators.compose([Validators.required])],
      description: ['', Validators.compose([Validators.required])]
    });
  }
}
