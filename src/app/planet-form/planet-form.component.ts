import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PlanetSearch } from '../shared/PlanetSearch';

@Component({
  selector: 'app-planet-form',
  templateUrl: './planet-form.component.html',
  styleUrls: ['./planet-form.component.css']
})
export class PlanetFormComponent implements OnInit {
  searchName : PlanetSearch = new PlanetSearch();
  @Output() onSearchByName = new EventEmitter<PlanetSearch>();

  constructor() { }

  ngOnInit(): void {
  }

  searchByName() {
    this.onSearchByName.emit(this.searchName);
    this.searchName = new PlanetSearch();
  }

}
