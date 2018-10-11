import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance',
})
export class DistancePipe implements PipeTransform {

  transform(meters: string, ...args) {
    if (!meters) return 'Unkown';
    let kilometers = +meters / 1000;
    return kilometers > 1 ? kilometers + ' km' : meters + ' m';
  }
}
