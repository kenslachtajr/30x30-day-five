import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetsService } from '@pets/core-data';

@Component({
  selector: 'pets-pets-item',
  templateUrl: './pets-item.component.html',
  styleUrls: ['./pets-item.component.css']
})
export class PetsItemComponent implements OnInit {
  _pet$;
  public get pet$() {
    return this._pet$;
  }
  public set pet$(value) {
    this._pet$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.pet$ = this.petService.findOne(id);
    });
  }

  goBackToPets() {
    this.router.navigate(['/pets']);
  }
}
