import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, forkJoin } from 'rxjs';
import { CharacterModel } from "../models/characterModel";
import { episodeModel } from '../models/episodeModel';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://rickandmortyapi.com/api/';

  results!: any[];

  constructor(private http: HttpClient) {}

  public getAllCharacters(page: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}character/?page=${page}`);
  }

  getCharacterDetails(id: number){
      return this.http.get<CharacterModel>(`${this.baseUrl}character/${id}`);
  }

  /* public getCharacter(id: number): Observable<CharacterModel> {
    let direccion = this.baseUrl + "character/" + id;
    return this.http.get<CharacterModel>(direccion);
  } */

  public getAllEpisodes(page: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}episode?page=${page}`);
  }

  public getEpisode(episode: number | string): Observable<any> {
    return this.http.get(`${this.baseUrl}character/${+episode}`);
  }

  public getLocation(location: number | string): Observable<any> {
    return this.http.get(`${this.baseUrl}character/${+location}`);
  }

  /*public getAllEpisodes(){
    const page1 = this.http.get('https://rickandmortyapi.com/api/episode?page=1');
    const page2 = this.http.get('https://rickandmortyapi.com/api/episode?page=2');
    const page3 = this.http.get('https://rickandmortyapi.com/api/episode?page=3');

    forkJoin([page1, page2, page3]).subscribe((results: any[]) => {
      // Aquí podemos hacer algo con los resultados de los tres llamados
      console.log('Resultados:', results);

      this.results = [
        ...results[0]['results'],
        ...results[1]['results'],
        ...results[2]['results'],
      ]

      return this.results.map((e) => {
        return { ...e, season: e['episode'].split("E")[0] };
      });
    });
  }*/




}


