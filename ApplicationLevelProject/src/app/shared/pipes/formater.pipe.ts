import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formater'
})
export class FormaterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
