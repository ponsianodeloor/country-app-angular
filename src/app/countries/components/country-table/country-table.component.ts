import {Component, Input} from '@angular/core';
import {Country} from "../../interfaces/Country.interface";

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.css'
})
export class CountryTableComponent {

  @Input()
  countries: Country[] = [];

  constructor() {
  }

}
