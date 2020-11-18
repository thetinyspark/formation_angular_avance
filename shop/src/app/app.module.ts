import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { IDCardComponent } from './idcard/idcard.component';
import { AcronymePipe } from './acronyme.pipe';
import { RandomPipe } from './random.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IDCardComponent,
    AcronymePipe,
    RandomPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
