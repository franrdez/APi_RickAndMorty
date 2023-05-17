import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Observable, tap, map, Subject, takeUntil, of } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  // characters$ = this.service.getAllCharacters().pipe(map(res => res['results']));
  searchTermChanged$ = new Subject<any>();
  filteredCharacters$ = new Observable<any>();
  characters$ = new Observable<any>();
  personajes: any[] = [];

  constructor(private service: ApiService, private http: HttpClient) { }

  private unsubcribe$ = new Subject<void>();

  filterCharacter = (characterList: any[], searchTerm: string): any[] =>
    characterList.filter((character: any) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  ngOnInit(): void {
    this.addCharacter();

    this.searchTermChanged$
      .pipe(
        tap((searchTerm: string) => {
          this.filteredCharacters$ = this.characters$.pipe(
            map((characterList: any[]) =>
              this.filterCharacter(characterList, searchTerm)
            )
          );
        })
      )
      .subscribe();

  }

  ngOnDestroy() {
    this.unsubcribe$.next();
  }


  addCharacter() {
    console.log(this.page_number);
    this.service
      .getAllCharacters(this.page_number)
      .pipe(
        takeUntil(this.unsubcribe$),
        tap((personajes) => {
          if (personajes) {
            this.personajes = personajes.results;
            this.characters$ = of(personajes.results);
            this.filteredCharacters$ = this.characters$;
          }
        })
      )

      .subscribe();
      console.log('Trae personajes');
  }
  page_number: number = 1

  handlePage(e: any) {
    if(e.pageIndex > 0){
      this.page_number = e.pageIndex + 1
    }
    if(e.pageIndex == 0){
      this.page_number = 1
    }
    this.addCharacter()
  }

  onSearchFilterChanged(event: any) {
    this.searchTermChanged$.next(event.target.value);
  }








}
