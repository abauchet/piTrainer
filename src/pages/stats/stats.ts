import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LearningPage } from "../learning/learning";

@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html'
})
export class StatsPage {
  learningPage = LearningPage;

  constructor(public navCtrl: NavController) {

  }

}
