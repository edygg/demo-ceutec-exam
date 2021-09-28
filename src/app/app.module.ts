import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetTableComponent } from './planet-table/planet-table.component';
import { PlanetFormComponent } from './planet-form/planet-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetTableComponent,
    PlanetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
