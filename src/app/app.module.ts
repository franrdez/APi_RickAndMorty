import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { CharacterCardClickableDirective } from './directives/character-card-clickable.directive';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { MatListModule } from '@angular/material/list';
import { PaginatorPipe } from './pipes/paginator.pipe';
import { MatTreeModule } from '@angular/material/tree';
import { EpisodesComponent } from './components/episodes/episodes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CharacterListComponent,
    CharacterCardClickableDirective,
    CharacterDetailsComponent,
    PaginatorPipe,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatTreeModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
