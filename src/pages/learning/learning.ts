import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { StatsPage } from "../stats/stats";
import { TrainingPage } from "../training/training";

@Component({
  selector: 'page-learning',
  templateUrl: 'learning.html'
})
export class LearningPage {
  @ViewChild(Content) content: Content;
  
  groupVisible = -1;
  statsPage = StatsPage;
  trainingPage = TrainingPage;

  constructor(public navCtrl: NavController, private dataProvider: DataProvider) {}

  groups = this.dataProvider.getDecimalFormatted();
  groupLength = this.groups[0].length;

  swipeUp(){
    let dimensions = this.content.getContentDimensions();
    this.content.scrollTo(0, dimensions.contentHeight+100, 100);
  }

  swipeDown(){
    this.content.scrollTo(0, 0, 100);
  }
}
