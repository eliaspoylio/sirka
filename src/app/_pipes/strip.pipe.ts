import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strip'
})
export class StripPipe implements PipeTransform {

  transform(value: string): any {
    return value.replace(/<.*?>/g, ' '); //replace tags in HTML
  }

}
