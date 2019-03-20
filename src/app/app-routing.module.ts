import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { EditScreenComponent } from './edit-screen/edit-screen.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { RatingsComponent } from './ratings/ratings.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'edit-screen', component: EditScreenComponent},
{path: 'add-movie', component: AddMovieComponent},
{path: 'ratings', component: RatingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
