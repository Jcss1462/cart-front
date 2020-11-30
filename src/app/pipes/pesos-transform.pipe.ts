import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pesosTransform'
})
export class PesosTransformPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    

    if (value !== undefined && value !== null) {
      return "$"+value.toLocaleString('en-US');
    } else {
      return '';
    }
  }

}
