import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-training',
  templateUrl: 'training.html',
})
export class TrainingPage {
  decimals: string = '';
  decimalsLength: number = this.storage.get('startFromDefault');
  padColor: string = '';
  startFromCount: number = -1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private dataProvider: DataProvider,
    private storage: Storage) {
  }

  showMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      // title: 'Modify your album',
      buttons: [
        {
          text: 'Challenge',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Start from',
          handler: () => {
            this.padColor = 'secondary';
            this.decimals = '';
            this.decimalsLength = 0;
            this.startFromCount = 100;
          }
        }
      ]
    });
    actionSheet.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingPage');
  }

  onkeyPress(value){
    if(value === 'menu'){
      this.showMenu();
    } else if(value === 'undo'){
      this.decimals = '';
      this.decimalsLength = this.storage.get('startFromDefault');
    } else {
      if(this.startFromCount > 0){
        this.decimalsLength = this.decimalsLength + value * this.startFromCount;
        this.startFromCount = this.startFromCount / 10;
        if(this.startFromCount < 1){
          this.storage.set('startFromDefault', this.decimalsLength);
          this.startFromCount = -1;
          this.padColor = '';
        }
      } else {
        let isOk = this.dataProvider.check(this.decimalsLength, value);
        if(isOk){
          this.padColor = '';
          this.decimals += value;
          this.decimalsLength += 1;
        } else {
          this.padColor = 'danger';
        }
      }
    }
  }
}
