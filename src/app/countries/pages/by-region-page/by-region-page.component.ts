import { Component, OnInit } from '@angular/core';
import {Country} from "../../interfaces/Country.interface";
import {CountriesService} from "../../services/countries.service";
import {Region} from "../../interfaces/Region.interface";

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  public placeholder: string = 'Búsqueda por Region';
  public regions: Region[] = [
    { id: 1, name: 'Africa' },
    { id: 2, name: 'Americas' },
    { id: 3, name: 'Asia' },
    { id: 4, name: 'Europe' },
    { id: 5, name: 'Oceania' },
  ];
  public regionSelected: string = '';
  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(
    private countriesService: CountriesService,
  ) {
  }

  ngOnInit(): void {
    this.regionSelected = this.countriesService.cache.byRegion.region?.name || '';
    this.countries = this.countriesService.cache.byRegion.countries;
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

    this.isLoading = true;

    this.countriesService.searchCountryByRegion(query)
      .subscribe((countries: Country[]) => {
        console.log(countries);
        this.countries = [...countries];
        this.isLoading = false;
      });
  }

}
