import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { IDCardComponent } from './idcard/idcard.component';
import { AcronymePipe } from './acronyme.pipe';
import { RandomPipe } from './random.pipe';
import { RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    IDCardComponent,
    AcronymePipe,
    RandomPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, 
    RouterModule.forRoot(
      [
        {"component":IDCardComponent,
       "path":"idcard"},
       
       {"component":HomeComponent,
       "path":"home"},
       
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
