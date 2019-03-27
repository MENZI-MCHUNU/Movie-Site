import {Pipe, PipeTransform} from '@angular/core';
import {Movie} from './../services/Movie';

@Pipe({
    name: 'moviesFilter'
})

export class MovieFilter implements PipeTransform{

    transform(movies: Movie[], searchTerm: string): Movie[] {
        if(!movies  || !searchTerm){
            return movies;
        }
        return movies.filter(movie =>
            movie.movie_Name.toLowerCase().indexOf(searchTerm) != -1);
    }
}
