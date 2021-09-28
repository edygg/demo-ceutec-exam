import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../shared/Planet';

@Component({
  selector: 'app-planet-table',
  templateUrl: './planet-table.component.html',
  styleUrls: ['./planet-table.component.css']
})
export class PlanetTableComponent implements OnInit {
  @Input() planets : Planet[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
