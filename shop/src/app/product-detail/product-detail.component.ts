import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Produit } from '../model/produit';
import { ProductService } from '../service/product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public product:Produit|null;
  
  constructor(public activatedRouted:ActivatedRoute,  public cartservice:CartService) { 
    this.product = null;
  }

  ngOnInit(): void {
    this.activatedRouted.data.subscribe(
      (data) => this.product = data.product as Produit
    )
      
  }

  public addToCard() {
    this.cartservice.add(this.product);
  }
}
