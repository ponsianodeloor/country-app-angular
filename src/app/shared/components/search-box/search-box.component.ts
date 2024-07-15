import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnDestroy{

  @Input()
  public placeholder: string = 'Search...';

  @Input()
  public value: string = '';

  @Output()
  public txtSearch: EventEmitter<string> = new EventEmitter<string>();

  // Es un tipo de observable que permite emitir valores a los suscriptores
  private searchSubject: Subject<string> = new Subject<string>();

  constructor() {
    this.searchSubject.pipe(
      debounceTime(300) // Adjust the debounce time as needed
    ).subscribe(query => {
      this.txtSearch.emit(query);
      console.log('Search box component');
    });
  }

  ngOnDestroy(): void {
    this.searchSubject.unsubscribe();
  }

  public onSearch(query: string): void {
    this.txtSearch.emit(query);
    console.log('Search box component');
  }

  public onKeypress(query:string): void {
    this.searchSubject.next(query);
    console.log('Key press event', query)
  }

}
