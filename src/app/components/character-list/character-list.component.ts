import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Observable, tap, map } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  personajes: any = [];
  characters$ = this.service.getAllCharacters().pipe(map(res => res['results']));

  constructor(private service: ApiService) {}

  ngOnInit(): void { console.log(this.characters$)}

  page_size: number = 6
  page_number: number = 1

  handlePage(e: PageEvent){
    this.page_size = e.pageSize
    this.page_number = e.pageIndex + 1
  }
}
