import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapCal } from './mapCal'

import Feature from 'ol/Feature';
import Map from 'ol/Map';
import XYZ from 'ol/source/XYZ';
import Overlay from 'ol/Overlay';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import Tile from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Icon from 'ol/style/Icon';
import Style from 'ol/style/Style';

import { transform } from 'ol/proj';
import { Restaurant } from '../../providers/restaurant-info/model/restaurant';
import { HttpClient } from '@angular/common/http';
import { Location } from '../../providers/restaurant-info/model/location';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  restaurante: Restaurant[];

  map: Map;
  overlay: Overlay;
  view: View;
  point: Point;
  tileLayer: Tile;

  mapDistance: MapCal;

  distancia: number = 0;
  ubicacion: number[] = [];
  locRestaurante: number[] = [];

  features: Feature[] = [];

  zoom: number;

  iconoRGenerico: string;
  iconoGMaps: string;
  iconoUbicacion: string;
  iconoAnimadoUbicacion: string;
  iconoCasa: string;

  ngOnInit() {

    this.mapDistance = new MapCal();

    this.zoom = 13;
    //Default pointer position
    this.locRestaurante = transform([-0.889159, 41.648715], 'EPSG:4326', 'EPSG:3857')

    this.iconoGMaps = 'http://www.clker.com/cliparts/J/U/K/G/l/9/google-maps-marker-for-residencelamontagne.svg.hi.png';
    this.iconoUbicacion = 'http://www.inside360.fr/wp-content/uploads/2014/10/home_address-icon.png';
    this.iconoAnimadoUbicacion = 'http://www.insoldelbajio.com/wp-content/uploads/2014/05/location-1.gif';
    this.iconoCasa = 'https://cdn1.iconfinder.com/data/icons/real-estate-set-1-3/64/real-estate_1-10-512.png';

    this.tileLayer = new Tile({
      source: new XYZ({
        url: 'http://tile.osm.org/{z}/{x}/{y}.png'
      })
    });

    this.map = new Map({
      target: 'map',
      layers: [this.tileLayer],
      view: new View({
        center: this.locRestaurante,
        minZoom: 10,
        zoom: this.zoom
      })
    });

    this.restaurante = this.navParams.get('restaurant');
    if (this.restaurante !== undefined) {
      this.restaurante.forEach((restaurante: Restaurant) => this.dibujarRestaurante(restaurante));
    }
  }

  dibujarRestaurante(restaurante: Restaurant): void {
    this.locRestaurante = transform(restaurante.geometry.coordinates, 'EPSG:4326', 'EPSG:3857');

    let view: View = this.map.getView();
    this.zoom = 16;
    view.setZoom(this.zoom);
    view.setCenter(this.locRestaurante);

    let estiloPointer = new Style({
      image: new Icon({
        anchor: [0.5, 0.7],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        scale: 0.3,
        src: restaurante.logo
      })
    });

    let feature = new Feature({
      geometry: new Point(this.locRestaurante)
    });

    let vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [feature]
      })
    });

    feature.setStyle(estiloPointer);
    this.map.addLayer(vectorLayer);
  }

  dibujarUbicacion(coords: number[]) {

    let view: View = this.map.getView();
    this.zoom = 18;
    view.setZoom(this.zoom);
    view.setCenter(coords);

    let estiloPointer = new Style({
      image: new Icon({
        anchor: [0.5, 0.7],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        scale: 0.05,
        src: this.iconoGMaps
      })
    });

    let feature = new Feature({
      geometry: new Point(coords)
    });

    let vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [feature]
      })
    });

    feature.setStyle(estiloPointer);
    this.map.addLayer(vectorLayer);
  }

  localizarPorIP(): void {
    this.ubicacion = [];
    this.http.get<Location>('https://ipapi.co/json')
      .subscribe(res => {
        this.ubicacion = [res.longitude, res.latitude];
        if (this.ubicacion.length > 0) {
          this.ubicacion = transform(this.ubicacion, 'EPSG:4326', 'EPSG:3857');
          this.dibujarUbicacion(this.ubicacion);

          let view = this.map.getView();

          view.setCenter(this.mapDistance.midCoords(this.ubicacion, this.locRestaurante));
          let distancia = this.cacularDistancia(this.ubicacion, this.locRestaurante);

          // console.log('Zoom1: ' + this.zoom);
          // console.log('Distancia: ' + distancia);
          this.zoom = this.mapDistance.mapping(distancia, 0, 10, 16, 1);
          // console.log('Zoom2: ' + this.zoom);

          view.setZoom(this.zoom);
        }
      });
  }

  cacularDistancia(coords1: number[], coords2: number[]): number {
    coords1 = transform(coords1, 'EPSG:3857', 'EPSG:4326');
    coords2 = transform(coords2, 'EPSG:3857', 'EPSG:4326');
    return this.mapDistance.distance2Points(coords1, coords2);
  }
}

