import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'ratingLoop'})
export class RatingLoop implements PipeTransform {
  transform(value, args: string[]): any {
    const res = [];
    for (let i = 0; i < value; i++) {
      res.push(i);
    }
    return res;
  }
}
