import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from './model/produit';

@Pipe({
  name: 'promotion'
})
export class PromotionPipe implements PipeTransform {

  transform(products: Produit[]): Produit[] {
    const results = products.filter(prod => prod.promotion);
    return results;
  }

}
