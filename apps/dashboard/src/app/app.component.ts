import { Component } from '@angular/core';

@Component({
  selector: 'pets-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';

  links = [{ path: './pets', icon: 'work', title: 'Pets' }];
}
