import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MytabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mytabs',
  templateUrl: 'mytabs.html'
})
export class MytabsPage {

  homeRoot = 'HomePage'
  mapRoot = 'MapPage'
  settingsRoot = 'SettingsPage'


  constructor(public navCtrl: NavController) {}

}
