import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from './Movie';
import {environment} from '../environments/environment';
import {error} from 'selenium-webdriver';
import MoveTargetOutOfBoundsError = error.MoveTargetOutOfBoundsError;


@Injectable()
export class MoviesService {

  private readonly backendAPI = environment.BackendAPI;
  public constructor(private http: HttpClient) {}

  getList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.backendAPI);
  }

  getsingle(id: string): Observable<Movie> {
    return this.http.get<Movie>(this.backendAPI + id);
  }

  update(movie: Movie): Observable<any> {
    return this.http.put<any>(this.backendAPI, movie);
  }

  deletesingle(id: string): Observable<any> {
    return this.http.delete(this.backendAPI + id);
  }

  addSingle(movie: Movie): Observable<any> {
    return this.http.post(this.backendAPI, movie);
  }
}
