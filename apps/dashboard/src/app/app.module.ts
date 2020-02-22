import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreDataModule } from '@pets/core-data';
import { MaterialModule } from '@pets/material';
import { UiLoginModule } from '@pets/ui-login';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { PetsListComponent } from './pets/pets-list/pets-list.component';
import { PetsDetailsComponent } from './pets/pets-details/pets-details.component';
import { PetsItemComponent } from './pets/pets-item/pets-item.component';
import { WildComponent } from './wild/wild.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    PetsListComponent,
    PetsItemComponent,
    PetsDetailsComponent,
    WildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CoreDataModule,
    MaterialModule,
    UiLoginModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
