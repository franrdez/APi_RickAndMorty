import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient) {}

  public getAllCharacters(): Observable<any> {
    return this.http.get(`${this.baseUrl}character`);
  }

  public getCharacter(character: number | string): Observable<any> {
    return this.http.get(`${this.baseUrl}character/${+character}`);
  }

  public getEpisode(episode: number | string): Observable<any> {
    return this.http.get(`${this.baseUrl}character/${+episode}`);
  }

  public getLocation(location: number | string): Observable<any> {
    return this.http.get(`${this.baseUrl}character/${+location}`);
  }
}
