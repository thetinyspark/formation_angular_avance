import { Injectable } from '@angular/core';
import { Observable,of,pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private languages:string[];
  private http:HttpClient;
  constructor(private httpService: HttpClient) { 
   this.languages= []; 
    this.http = httpService;
  }

  public getLanguages(): Observable <string[]> {
    return this.http.get("assets/data/languages.json").pipe(
      map(
        (data:any) => {
          return data as string[];
        }
      )
    )
  }
  public add(language:string):void {
    this.languages.push(language);
  }

  public delete(language:string):boolean {
    const pos : number = this.languages.indexOf(language);
    this.languages.splice(pos,1);
    return pos>-1;
  }
}
