import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public content:Produit[];
  public size:number=0;
  constructor(public cartService:CartService) {
    this.content = [];
   }

  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.content = this.cartService.getContent();
  }
  public remove(prod : Produit):void {
    this.cartService.delete(prod);
    this.refresh();
  }
}
