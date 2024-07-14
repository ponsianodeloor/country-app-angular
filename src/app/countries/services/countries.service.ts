import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, delay, map, Observable, of, tap} from 'rxjs';

import {Country} from "../interfaces/Country.interface";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private url = 'https://restcountries.com/v3.1';

  constructor(
    private httpClient: HttpClient
  ) { }

  private getCountriesRequest(url:string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        delay(2000)
      );
  }

  /**
   * Get all countries from the API https://restcountries.com//v3.1 by code
   * @param code
   */
  /*searchCountryByAlphaCode(code: string):Observable<Country | undefined> {
    return this.httpClient.get<Country>(`${this.url}/alpha/${code}`)
      .pipe(
        map(country => country),
        catchError(err => {
        console.log('Error en el catchError:', err);
        return [];
      })
    );
  }*/

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {

    const url = `${ this.url }/alpha/${ code }`;

    return this.httpClient.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }


  /**
   * Get all countries from the API https://restcountries.com//v3.1 by Capital
   * in array of objects
   * @param name
   */
  searchCountryByCapital(name: string):Observable<Country[]> {
    //return this.httpClient.get<Country[]>(`${this.url}/capital/${name}`);

    /*return this.httpClient.get<Country[]>(`${this.url}/capital/${name}`).pipe(
      tap(countries => console.log('tap 1' + countries)),
      map(countries => []),
      tap(countries => console.log('tap 2' + countries))
    );*/

    /*return this.httpClient.get<Country[]>(`${this.url}/capital/${name}`).pipe(
      catchError(err => {
        console.log('Error en el catchError:', err);
        return [];
      })
    );*/

    return this.httpClient.get<Country[]>(`${this.url}/capital/${name}`).pipe(
      catchError(err => {
        console.log('Error en el catchError:', err);
        return of([]);
      })
    );
  }

  /**
   * Get all countries from the API https://restcountries.com//v3.1 by Region
   * @param name
   */
  searchCountryByRegion(name: string):Observable<Country[]> {
    return this.getCountriesRequest(`${this.url}/region/${name}`);
    /*return this.httpClient.get<Country[]>(`${this.url}/region/${name}`).pipe(
      catchError(err => {
        console.log('Error en el catchError:', err);
        return of([]);
      })
    );*/
  }

  /**
   * Get all countries from the API https://restcountries.com//v3.1 by Name
   * @param name
   */
  searchCountryByName(name: string):Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.url}/name/${name}`).pipe(
      catchError(err => {
        console.log('Error en el catchError:', err);
        return of([]);
      })
    );
  }
}
