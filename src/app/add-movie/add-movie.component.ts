import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MoviesService} from '../../services/moviesService';
import {Movie} from '../../services/Movie';
import {catchError} from 'rxjs/operators';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

   
  topics = ['Action', 'Science Fiction', 'Comedy', 'Sport'];

  movieForm : FormGroup;
  //submitted = false;
 // success = false;
  movie: Movie;
  constructor(private formBuilder: FormBuilder, private route: Router, private data: MoviesService) {
  this.movieForm = this.formBuilder.group({
     movie_Name: ['',Validators.required],
     movie_Category: ['',Validators.required],
     movie_Rating: ['',Validators.required]
  })
  }

  ngOnInit() {
    this.movie = new Movie();
  }

  onSubmit(item: Movie) {
    // add validation here
   // this.submitted = true;

  //  if(this.movieForm.invalid){
 //     return;
 //   }
   // this.success = true;

    this.data.addSingle(item).subscribe(x => {
      this.route.navigate(['']);
    }, error => {
      console.log(error);
    });
    
  }


}
