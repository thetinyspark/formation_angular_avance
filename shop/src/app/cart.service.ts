import { Injectable } from '@angular/core';
import { Produit } from './model/produit';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  public content:Produit[];

  constructor() { 
    this.content = [];
  }
  public add(product: Produit|null) {
    if (product !=null) {
      this.content = [...this.content,product];
   }
  }

  public getContent():Produit[] {
    return this.content;
  }

  public delete(product:Produit | null):boolean {
    if (product != null) {
    const pos:number = this.content.indexOf(product);
    this.content.splice(pos,1)
    this.content = [...this.content]
    return pos >-1;
    }
    else {
      return false;
    }
  }
}
