import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router'
import { ClockComponent } from './clock/clock.component';

@NgModule({
  declarations: [ClockComponent],
  imports: [
    CommonModule,RouterModule.forChild([{path:"",component:ClockComponent}])
  ],
  exports: [RouterModule]
})
export class ClockModule { }
