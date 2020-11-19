import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { IDCardComponent } from './idcard/idcard.component';
import { AcronymePipe } from './acronyme.pipe';
import { RandomPipe } from './random.pipe';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculComponent } from './calcul/calcul.component'
import { LanguageService } from './language.service';
import { AcronymeOnePipe } from './acronymeone.pipe';
import { HttpClientModule } from '@angular/common/http';
import { PokemonComponent } from './pokemon/pokemon.component';
@NgModule({
  declarations: [
    AppComponent,
    IDCardComponent,
    AcronymePipe,
    AcronymeOnePipe,
    RandomPipe,
    HomeComponent,
    CalculComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,FormsModule, 
    RouterModule.forRoot(
      [
        {"component":IDCardComponent,
       "path":"idcard"},
       
       {"component":HomeComponent,
       "path":"home/:id"},
       {"component":CalculComponent,
       "path":"calcul/:a/:b/:op"},
       {"component":PokemonComponent,
       "path":"pokemon/:id"},
       {"component":HomeComponent,
       "path":""},
       
      ]
    )
  ],
  providers: [HttpClientModule,LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
