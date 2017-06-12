import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
})
export class FormatPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
    if(value.length === 0){
      return '';
    } else {
      return value.match(/.{1,2}/g).join('-').replace(/(........)./g, "$1  ");
    }
  }
}
