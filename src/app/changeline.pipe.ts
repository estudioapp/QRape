import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeline'
})
export class ChangelinePipe implements PipeTransform {

  transform(value: any): any {
    return value.replace(/-/g," ");
  }

}
