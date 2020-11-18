import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IDCardComponent implements OnInit {
  name :string   = 'PHP';

  public languages:Array<string> = ['PHP','Basic','Erlang','C++','Fortran'];
  constructor() { 
  }

  ngOnInit(): void {
  }

  add():void {
    this.languages = [... this.languages,this.name];
  }
  del(lang:string):void {
    console.log(lang)
   this.languages = this.languages.filter(function(item) {
    return item !== lang;
})

  }
}
