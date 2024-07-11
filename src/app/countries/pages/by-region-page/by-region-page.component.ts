import { Component } from '@angular/core';
import {Country} from "../../interfaces/Country.interface";
import {CountriesService} from "../../services/countries.service";

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public placeholder: string = 'Búsqueda por Region';
  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService,
  ) {
  }

  /**
   * Search by region
   * @param query
   */
  public searchByRegion(query: string): void {
    console.log(query);
    console.log('Search by region page');

    if (query.length === 0) {
      this.countries = [];
      return;
    }

    this.countriesService.searchCountryByRegion(query)
      .subscribe((countries: Country[]) => {
        console.log(countries);
        this.countries = [...countries];
      });
  }

}
