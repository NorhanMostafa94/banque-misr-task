import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList',
})
export class FilterListPipe implements PipeTransform {
  transform(list: any[], value: any): any[] {
    return list.filter((item) => item !== value);
  }
}
