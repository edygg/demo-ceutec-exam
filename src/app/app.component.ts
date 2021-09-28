import { Component } from '@angular/core';
import { Planet } from './shared/Planet';
import { PlanetSearch } from './shared/PlanetSearch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-ceutec-search';
  planetStorage : Planet[] = [];
  planetFiltered : Planet[] = [];

  
  constructor() {
    let planet1 = new Planet();
    let planet2 = new Planet();
    let planet3 = new Planet();
    planet1.name = "Tatooine";
    planet2.name = "Alderaan";
    planet3.name = "Yavin IV";

    this.planetStorage = [
      planet1,
      planet2,
      planet3,
    ]

    // Volver a obtener del servicio 
    // al inicio siempre se mostrarán todos los planetas
    this.planetFiltered = [
      planet1,
      planet2,
      planet3,
    ]

  }

  filterByName(planetSearch : PlanetSearch) {
    this.planetFiltered = this.planetStorage.filter(planet => {
      return planet.name.includes(planetSearch.name.toString());
    });
  }
}
