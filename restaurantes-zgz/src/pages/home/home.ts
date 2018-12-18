import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantInfoProviderReq } from '../../providers/restaurant-info/restaurantRequest';
import { Restaurant } from '../../providers/restaurant-info/model/restaurant';
import { MapPage } from '../map/map';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  restaurantes: Restaurant[];
  urlWebZgz: string;
  imagenRGenerica: string;
  iconoRGenerico: string;

  ngOnInit(): void {
    this.cargarRestaurantes(10);
    this.restaurantes = [];
    this.urlWebZgz = 'https://www.zaragoza.es';
    this.imagenRGenerica = 'https://image.freepik.com/foto-gratis/fondo-borroso-difuminar-frente-restaurante-luz-bokeh_7190-925.jpg'
    this.iconoRGenerico = 'https://furtaev.ru/preview/restaurant_map_pointer_small.png';
  }


  constructor(public navCtrl: NavController, public navParams: NavParams, public restaurantInfoProviderReq: RestaurantInfoProviderReq) {
  }

  cargarRestaurantes(amount: number): void {
    this.restaurantInfoProviderReq.getNRestaurant(amount)
      .subscribe(res => {
        res.result.forEach(restaurante => {
          restaurante.image = restaurante.image === undefined ? this.imagenRGenerica : this.urlWebZgz + restaurante.image;
          restaurante.logo = restaurante.logo === undefined ? this.iconoRGenerico : this.urlWebZgz + restaurante.logo;
          this.restaurantes.push(restaurante)
        })
      });
  }

  cargarInfo(restaurante: Restaurant): void {
    this.navCtrl.push(MapPage, {
      restaurant: [restaurante]
    });

  }

}
