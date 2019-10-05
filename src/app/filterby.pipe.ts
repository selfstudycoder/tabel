import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterby'
})
export class FilterbyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
