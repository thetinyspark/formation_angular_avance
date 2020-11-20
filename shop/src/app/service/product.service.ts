import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produit } from '../model/produit';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpService:HttpClient) { }

  getProduits():Observable<Produit[]> {
    const url = environment.url_relative + "/assets/data/product.json"
    return this.httpService.get<Produit[]>(url);
  }

  getProduitsById(id:number):Observable<Produit | null> {
    return this.getProduits().pipe(
      map(
        datas => {
          const prod =  datas.filter((prod)=> prod.id===id)[0];
          if (prod) {
            return prod;
          }
          return null;
        }
      )
    ) 
  }
}
