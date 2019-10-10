import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-learning',
  templateUrl: 'learning.html'
})
export class LearningPage {
  groupVisible = -1;

  constructor(public navCtrl: NavController, private dataProvider: DataProvider) {}

  swipeEvent(e) {
    console.log(e);
  }

  groups = this.dataProvider.getDecimalFormatted();
  groupLength = this.groups[0].length;
}
