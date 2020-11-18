import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculComponent implements OnInit {

  constructor(public router:ActivatedRoute) { }
  public result:Number =0;

  ngOnInit(): void {
    this.router.paramMap.subscribe(
      (map:ParamMap) => {
        const a = parseInt(map.get("a") as string);
        const b = parseInt(map.get("b") as string);
        const op = map.get("op") as string;
        switch(op) { 
          case 'div':
            this.result = a /b;
            break;
          case 'mul':
            this.result = a * b;
            break;
          case 'add':
            this.result = a + b;
             break;
          case 'min':
            this.result = a-b;     
        }

      }
    )
  }

}
