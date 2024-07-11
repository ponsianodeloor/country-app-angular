import {Component, Input} from '@angular/core';
import {CountriesService} from "../../services/countries.service";
import {Country} from "../../interfaces/Country.interface";

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  public placeholder: string = 'Búsqueda por Capital';

  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService
  ) {
  }

  /**
   * Search by capital
   * @param query
   */
  public searchByCapital(query: string): void {
    console.log(query);
    console.log('Search by capital page');

    if (query.length === 0) {
      this.countries = [];
      return;
    }

    this.countriesService.searchCountryByCapital(query)
      .subscribe((countries:Country[]) => {
        console.log(countries);
        this.countries = [...countries];
      });
  }

}
