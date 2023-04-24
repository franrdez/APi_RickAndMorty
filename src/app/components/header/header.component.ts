import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private router: Router){}

  ngOnInit(): void {

  }

  navegarHome(){
    this.router.navigate(['home']);
  }

  navegarCharacter(){
    this.router.navigate(['/character-list']);
  }
}
