import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KeypadComponent } from './keypad';

@NgModule({
  declarations: [
    KeypadComponent,
  ],
  imports: [
    IonicPageModule.forChild(KeypadComponent),
  ],
  exports: [
    KeypadComponent
  ]
})
export class KeypadComponentModule {}
