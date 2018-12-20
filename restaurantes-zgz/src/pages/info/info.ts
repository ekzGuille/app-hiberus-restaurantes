import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Restaurant } from '../../providers/restaurant-info/model/restaurant';
import { MapPage } from '../map/map';


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  restaurante: Restaurant;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ngOnInit(): void {
    this.restaurante = this.navParams.get('restaurant')[0];
  }

  mostrarMapa(restaurante: Restaurant): void {
    this.navCtrl.push(MapPage, {
      restaurant: [restaurante]
    });
  }

}
