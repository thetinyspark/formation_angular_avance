import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Produit } from './model/produit';
import { CatalogService } from './catalog.service';
import { ProductService } from './service/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Produit | null> {
  constructor(public catalogs:ProductService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Produit | null> {
    const id:number = parseInt(route.paramMap.get("id") as string);
    return this.catalogs.getProduitsById(id);
  }
}
