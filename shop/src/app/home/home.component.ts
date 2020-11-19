import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public names:string[] = ["Nicolas", "Medhi", "Fabrice"]
  public pos = 0;
  public languages:string[];
  constructor(public router:ActivatedRoute,public service:LanguageService) 
  {this.languages = []; }
  
  ngOnInit(): void {
    this.router.paramMap.subscribe(
      (map:ParamMap) => {
        this.pos =parseInt( map.get("id") as string);
      }
    )
     this.service.getLanguages().subscribe(
      result => this.languages = result
    );
  }

}
