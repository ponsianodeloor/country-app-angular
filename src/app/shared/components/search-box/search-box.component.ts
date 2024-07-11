import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = 'Search...';

  @Output()
  public txtSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public onSearch(query: string): void {
    this.txtSearch.emit(query);
    console.log('Search box component');
  }

}
