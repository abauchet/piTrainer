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

  // groups = [
  //   ['10-87-98','78-85-89','78-85-89','78-85-89'],
  //   ['10-87-98','78-85-89','78-85-89','78-85-89']
  // ];

  groups = this.dataProvider.getDecimalFormatted();

  groupLength = this.groups[0].length;
}
