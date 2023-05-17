import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Observable, tap, map, Subject, takeUntil, of } from 'rxjs';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit{

  episodes: any[] = [];
  //episodes$ = this.apiService.getAllEpisodes().pipe(map(res => res['results']));

  constructor(private apiService: ApiService, private http:HttpClient) {}

  private unsubcribe$ = new Subject<void>();


  ngOnInit(): void {
    this.addEpisode();

  }

  addEpisode(){
    console.log(this.page_number);
    this.apiService
      .getAllEpisodes(this.page_number)
      .pipe(
        takeUntil(this.unsubcribe$),
        tap((episodes) => {
          if (episodes) {
            this.episodes = episodes.results;
          }
        })
      ).subscribe();
  }
  page_number: number = 1;

  handlePage(e: any) {
    if(e.pageIndex > 0){
      this.page_number = e.pageIndex + 1
    }
    if(e.pageIndex == 0){
      this.page_number = 1
    }
    this.addEpisode()
  }





}
