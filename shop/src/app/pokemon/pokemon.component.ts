import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Pokemon } from '../model/pokemon';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  public pokemon:Pokemon|null;
  constructor(public pokemonService:PokemonService,public router:ActivatedRoute) {
    this.pokemon = new Pokemon();
   }

  ngOnInit(): void {
    this.router.paramMap.subscribe(
      (map:ParamMap) => {
        const id:string|number = map.get("id") as string;
        this.pokemonService.getPokemon(id).subscribe(
          result => { console.log("result");this.pokemon =result;}
        )
      }
    );
    this.router.paramMap.pipe(
      mergeMap((map:ParamMap) => {
        return  map.get("id") as string;
      })
    ).pipe(
      mergeMap(
        (id:string) => {
         return  this.pokemonService.getPokemon(id)
        }
      )
    ).pipe
    (map(
      data => this.pokemon = data
    ))
  }

}
