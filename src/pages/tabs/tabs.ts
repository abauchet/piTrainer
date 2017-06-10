import { Component } from '@angular/core';

import { TrainingPage } from '../training/training';
import { LearningPage } from "../learning/learning";
import { StatsPage } from "../stats/stats";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabs = [{
    component: TrainingPage,
    title: 'Training', 
    icon: 'home'
  },{
    component: LearningPage,
    title: 'Learning', 
    icon: 'information-circle'
  },{
    component: StatsPage,
    title: 'Stats', 
    icon: 'contacts'
  }];

  constructor() {}
}
