import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acro'
})
export class AcronymeOnePipe implements PipeTransform {

  transform(value:string) {
     return  value.split("").join(".");
  }

}
