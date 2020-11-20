import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { ProductService } from '../service/product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public produits:Produit[];
  constructor(private produitsService:ProductService, public cartService:CartService) 
  { 
    this.produits = [];
  }
  
  ngOnInit(): void {
    this.produitsService.getProduits().subscribe(
        data => this.produits = data
    )
  }

  addChildProductToCart(event:Produit) {
    this.cartService.add(event);
  }
}
