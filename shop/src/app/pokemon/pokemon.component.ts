import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  public pokemon:any;
  constructor(public pokemonService:PokemonService,public router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe(
      (map:ParamMap) => {
        let id = map.get("id") as string;
        console.log(id);
        this.pokemonService.getPokemon(id).subscribe(
          result => this.pokemon =result
        )
      }
    );
  }

}
