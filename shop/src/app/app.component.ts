import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title   = 'shop';
  name    = 'Fabrices';
  age:Number     = 5;
  taille  = '180cm';
  poids    ='73kg';
  sexe    = 'M';
}
