import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LearningPage } from '../pages/learning/learning';
import { StatsPage } from '../pages/stats/stats';
import { TrainingPage } from '../pages/training/training';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { KeypadComponent } from '../components/keypad/keypad';
import { DataProvider } from '../providers/data/data';
import { FormatPipe } from '../pipes/format/format';

<<<<<<< HEAD
import { IonicStorageModule } from '@ionic/storage';
=======
import { IonicStorageModule } from '@ionic/Storage';
>>>>>>> a3cc6aa5df5216331e9f7b9c7b6975ff07029a7d

@NgModule({
  declarations: [
    MyApp,
    LearningPage,
    StatsPage,
    TrainingPage,
    TabsPage,
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
    TrainingPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
