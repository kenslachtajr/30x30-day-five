import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pets-wild',
  templateUrl: './wild.component.html',
  styleUrls: ['./wild.component.scss']
})
export class WildComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToPets() {
    this.router.navigate(['./pets']);
  }
}
