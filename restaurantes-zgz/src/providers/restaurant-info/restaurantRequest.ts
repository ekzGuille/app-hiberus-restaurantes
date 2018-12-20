import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestaurantResponse } from './restaurantResponse';

/*
  Generated class for the RestaurantInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestaurantInfoProviderReq {

  private URL: string = 'https://www.zaragoza.es/sede/servicio/restaurante.json';
  private params: string;

  constructor(public http: HttpClient) { }

  getNRestaurant(amount: number): Observable<RestaurantResponse> {
    if ((amount !== null || amount !== undefined) && amount > 0) {
      this.params = `?srsname=wgs84&rows=${amount}`;
    } else {
      this.params = `?srsname=wgs84&rows=50`;
    }
    return this.http.get<RestaurantResponse>(this.URL + this.params);
  }

  getTenedores(amount: number): Observable<RestaurantResponse> {
    if ((amount !== null || amount !== undefined)) {
      this.params = `?srsname=wgs84&tenedores=${amount}`;
    } else {
      this.params = `?srsname=wgs84`;
    }
    return this.http.get<RestaurantResponse>(this.URL + this.params);
  }
}
