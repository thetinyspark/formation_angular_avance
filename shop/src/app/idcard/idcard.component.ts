import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IDCardComponent implements OnInit {
  name :string   = 'PHP';

  public languages:Array<string> = [];
  constructor(public languageService:LanguageService) { 
  }

  ngOnInit(): void {
   this.refresh();
  }

  public refresh() :void{
    this.languageService.getLanguages().subscribe(
      result => this.languages = result
    );
  }
  add():void {
    this.languageService.add(this.name);
    this.refresh(); 
  }
  
  del(lang:string):void {
    this.languageService.delete(lang);
    this.refresh();
  }

}
