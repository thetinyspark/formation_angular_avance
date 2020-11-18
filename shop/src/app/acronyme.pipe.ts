import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acronyme'
})
export class AcronymePipe implements PipeTransform {

  transform(values:string[]): string[] {
    const result = [];
    for (let i:number =0;i<values.length;i++) {
      let current = values[i];
      current = current.split("").join(".");
      result.push(current)
    }
    return result;
  }

}
