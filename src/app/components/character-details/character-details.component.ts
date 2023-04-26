import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, take } from 'rxjs';
import { CharacterModel } from 'src/app/models/characterModel';
import { ApiService } from 'src/app/service/api.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit{

  character$!: Observable<CharacterModel>;

  constructor(private route: ActivatedRoute, private service: ApiService, private location: Location){}


  ngOnInit(): void{
    this.route.params.pipe(take(1)).subscribe((params) => {
      const id = params['id'];
      this.character$ = this.service.getCharacterDetails(id);
    });
  }

  onGoBack(): void{
    this.location.back();
  }
}
