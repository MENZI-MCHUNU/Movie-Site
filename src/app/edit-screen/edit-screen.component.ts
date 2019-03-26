import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MoviesService} from '../../services/moviesService';
import {Movie} from '../../services/Movie';
import { ErrorHandlerService } from '../../services/errorHandlerService';


@Component({
  selector: 'app-edit-screen',
  templateUrl: './edit-screen.component.html',
  styleUrls: ['./edit-screen.component.css']
})
export class EditScreenComponent implements OnInit {
  topics = ['Action', 'Science Fiction', 'Comedy', 'Sport'];

  editMovie: FormGroup;
 // submitted = false;
//  success = false;
  movie: Movie;

  public errorMessage: string ='';
  constructor(private router: Router, private activeRoute: ActivatedRoute, private data: MoviesService, private errorHandler: ErrorHandlerService) {}

  onSubmit(item: Movie) {

  // Do validation here
    console.log(item);
    this.data.update(item).subscribe(x => {
      this.router.navigate(['']);
    },
    //  error => {
      //  console.log(error);
      //}
      (error) =>{
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      }
  );
  }

  ngOnInit() {

    this.activeRoute.params.subscribe( para => {
      if (para.id) {
        this.data.getsingle(para.id).subscribe(x => {
          this.movie = x;
        },
        // error =>  {
          //console.log(error);
        //}
        (error) =>{
        this.errorHandler.handleError(error);
        this.errorMessage = this.errorHandler.errorMessage;
      }
      );
      }
    } );
  }

}
