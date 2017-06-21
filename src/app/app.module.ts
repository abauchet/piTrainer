import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { LearningPage } from '../pages/learning/learning';
import { StatsPage } from '../pages/stats/stats';
import { TrainingPage } from '../pages/training/training';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { KeypadComponent } from '../components/keypad/keypad';
import { DataProvider } from '../providers/data/data';
import { FormatPipe } from '../pipes/format/format';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { IonicStorageModule } from '@ionic/storage';

export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
      'swipe': {velocity: 0.4, threshold: 20} // override default settings
  }
}

@NgModule({
  declarations: [
    MyApp,
    LearningPage,
    StatsPage,
    TrainingPage,
    KeypadComponent,
    FormatPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LearningPage,
    StatsPage,
    TrainingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig},
    // {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
