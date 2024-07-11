import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Country} from "../interfaces/Country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url = 'https://restcountries.com/v3.1';

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Get all countries from the API https://restcountries.com//v3.1 by Capital
   * in array of objects
   * @param name
   */
  searchCountryByCapital(name: string):Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}/capital/${name}`);
  }
}
