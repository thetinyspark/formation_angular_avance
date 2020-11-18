import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'random'
})
export class RandomPipe implements PipeTransform {

  transform(values:string[]): string[] {
    const result =  values.sort(() => Math.random() - 0.5);
    return result;
  }
}
