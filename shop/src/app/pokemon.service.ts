import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,of,pipe } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private httpClient : HttpClient;
  constructor(private http:HttpClient) {
    this.httpClient = http;
  }

  public getPokemon(id:string):Observable<any> {
    return this.httpClient.get('https://pokeapi.co/api/v2/pokemon/'+id ).pipe(
    map(
      (data:any) => {return data as string}
      )
    )
  }
}
