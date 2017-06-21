import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { StatsPage } from "../stats/stats";
import { TrainingPage } from "../training/training";

@Component({
  selector: 'page-learning',
  templateUrl: 'learning.html'
})
export class LearningPage {
  groupVisible = -1;
  statsPage = StatsPage;
  trainingPage = TrainingPage;

  constructor(public navCtrl: NavController, private dataProvider: DataProvider) {}

  groups = this.dataProvider.getDecimalFormatted();

  groupLength = this.groups[0].length;
}
