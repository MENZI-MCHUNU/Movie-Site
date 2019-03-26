import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { EditScreenComponent } from './edit-screen/edit-screen.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { RatingsComponent } from './ratings/ratings.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from '../services/moviesService';
import { ErrorHandlerService } from '../services/errorHandlerService';
import { RatingLoop } from '../pipe/ratingLoop';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    EditScreenComponent,
    AddMovieComponent,
    RatingsComponent,
    RatingLoop,
    InternalServerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MoviesService,ErrorHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
