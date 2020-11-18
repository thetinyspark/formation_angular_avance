import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public names:string[] = ["Nicolas", "Medhi", "Fabrice"]
  public pos = 0;
  constructor(public router:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.router.paramMap.subscribe(
      (map:ParamMap) => {
        this.pos =parseInt( map.get("id") as string);
      }
    )
  }

}
