import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { PetsItemComponent } from './pets/pets-item/pets-item.component';
import { WildComponent } from './wild/wild.component';
import { LoginComponent } from '@pets/ui-login';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildComponent },
  { path: 'pets', component: PetsComponent },
  { path: 'pets/:id', component: PetsItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
