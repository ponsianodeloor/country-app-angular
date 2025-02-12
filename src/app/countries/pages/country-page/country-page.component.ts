import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CountriesService} from "../../services/countries.service";
import {Country} from "../../interfaces/Country.interface";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activateRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(
        switchMap(({id}) => this.countriesService.searchCountryByAlphaCode(id))
      )
      .subscribe((country) => {
        console.log(country);
        if(!country){
          console.log('No existe');
          return this.router.navigateByUrl(''); // Redirect to home
        }
        return this.country = country;
      });
  }


}
