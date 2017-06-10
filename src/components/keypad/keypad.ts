import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'keypad',
  templateUrl: 'keypad.html'
})
export class KeypadComponent {
  @Input() padColor: string = '';
  @Output() onkeyPress = new EventEmitter<string>();

  constructor() {}

  click(value){
    this.onkeyPress.emit(value);
  }
}
