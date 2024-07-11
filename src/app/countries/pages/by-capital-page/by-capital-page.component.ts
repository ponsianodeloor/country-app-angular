import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  public placeholder: string = 'Búsqueda por Capital';

  constructor() {
  }

  public searchByCapital(query: string): void {
    console.log(query);
    console.log('Search by capital page');
  }

}
