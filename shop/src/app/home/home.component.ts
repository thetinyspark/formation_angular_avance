import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../service/product.service';
import { Produit } from '../model/produit';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Store } from '@ngrx/store';
import { increment, decrement, reset} from './../reducers/counter.reducer';
import { addRandomNumber} from './../reducers/random.reducer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public produits:Produit[];
  public counter:number =0;
  public randomtab:number[]=[];
  constructor(private produitsService:ProductService,
    public store:Store<any>) 
  { 
    this.produits = [];
  }
  
  ngOnInit(): void {
    this.produitsService.getProduits().subscribe(
        data => this.produits = data
    )
    this.store.select('count').subscribe(
      val => {this.counter = val;}
    );
    this.store.select('random').subscribe(
      val => {this.randomtab = val;}
    );
  }
  public toggleChange(event:MatSlideToggleChange) {
  
    if (event.checked) {
      this.store.dispatch(increment())
    }
    else {
      this.store.dispatch(decrement())
    }
 
  }
  addrandom() {
    console.log("titi")
    this.store.dispatch(addRandomNumber())
  }
}
