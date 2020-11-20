import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-product-thumb',
  templateUrl: './product-thumb.component.html',
  styleUrls: ['./product-thumb.component.css']
})
export class ProductThumbComponent implements OnInit {
  @Input()
  public product:Produit|null;

  @Output()
  public productAdded: EventEmitter<Produit> = new EventEmitter();

  constructor() {
    this.product = null;
   }

  ngOnInit(): void {
  }

  public addToCard() {
    if (this.product !=null) {
      this.productAdded.emit(this.product)
    }
  }
}
