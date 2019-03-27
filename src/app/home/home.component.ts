import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/moviesService';
import {Movie} from '../../services/Movie';
import {catchError} from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[];
  searchTerm: string;
  constructor(private data: MoviesService, private router: Router) { }

  ngOnInit() {
    this.getItems();
  }

  public getItems() {
    this.data.getList().subscribe(x => {
      this.movies = x.sort((s) => s.movie_Rating); // this is where your going to sort it out
      //
      });
  }

  editMovie( id: Movie) {
    this.router.navigate(['./edit-screen', id]);
  }

  removeItem(id: any) {
    this.data.deletesingle(id).subscribe(x => {
      this.getItems();
    });
  }
}
