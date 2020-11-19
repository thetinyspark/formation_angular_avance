import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable,of,pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pokemon } from './model/pokemon';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private httpClient : HttpClient;
  constructor(private http:HttpClient) {
    this.httpClient = http;
  }

  public getPokemon(id:string|number):Observable<Pokemon|null> {
    return this.httpClient.get<HttpResponse<any>>('https://pokeapi.co/api/v2/pokemon/'+id, {observe:'response'} ).pipe(
    map(
      (resp:HttpResponse<any>) => {
        if (resp.status == 404) {
          return null;
        }
        
        return resp.body as Pokemon;}
      )
    )
  }
}
