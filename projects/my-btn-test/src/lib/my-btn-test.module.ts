import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBtnTestComponent } from './my-btn-test.component';



@NgModule({
  declarations: [
    MyBtnTestComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyBtnTestComponent
  ]
})
export class MyBtnTestModule { }
