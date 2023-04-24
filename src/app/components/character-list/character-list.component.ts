import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Observable, tap, map } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  personajes: any = [];
  characters$ = this.service.getAllCharacters().pipe(map(res => res['results']));

  constructor(private service: ApiService) {}

  ngOnInit(): void {}

}
