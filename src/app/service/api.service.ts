import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { CharacterModel } from "../models/characterModel";

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) {}

  public getAllCharacters(): Observable<any> {
    return this.http.get(`${this.baseUrl}character`);
  }

  getCharacterDetails(id: number){
      return this.http.get<CharacterModel>(`${this.baseUrl}character/${id}`);
  }

  /* public getCharacter(id: number): Observable<CharacterModel> {
    let direccion = this.baseUrl + "character/" + id;
    return this.http.get<CharacterModel>(direccion);
  } */

  public getAllEpisodes(): Observable<any> {
    return this.http.get(`${this.baseUrl}episode`);
  }

  public getEpisode(episode: number | string): Observable<any> {
    return this.http.get(`${this.baseUrl}character/${+episode}`);
  }

  public getLocation(location: number | string): Observable<any> {
    return this.http.get(`${this.baseUrl}character/${+location}`);
  }
}
