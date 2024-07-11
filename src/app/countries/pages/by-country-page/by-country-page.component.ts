import { Component } from '@angular/core';
import {Country} from "../../interfaces/Country.interface";
import {CountriesService} from "../../services/countries.service";

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public placeholder: string = 'Búsqueda por name';
  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService,
  ) {
  }

  /**
   * Search by name
   * @param query
   */
  public searchByName(query: string): void {
    console.log(query);
    console.log('Search by country name');

    if (query.length === 0) {
      this.countries = [];
      return;
    }

    this.countriesService.searchCountryByName(query)
      .subscribe((countries: Country[]) => {
        console.log(countries);
        this.countries = [...countries];
      });
  }


}
