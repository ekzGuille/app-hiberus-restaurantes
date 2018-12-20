import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import Feature from 'ol/Feature';
import Map from 'ol/Map';
import XYZ from 'ol/source/XYZ';
import Overlay from 'ol/Overlay';
import View from 'ol/View';
import Point from 'ol/geom/Point';
import Tile from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import Draw from 'ol/interaction/Draw';
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

  iconFeature: Feature;
  iconStyle: Style;
  map: Map;
  mapSource: XYZ;
  overlay: Overlay;
  view: View;
  point: Point;
  tileLayer: Tile;
  vectorLayerMap: VectorLayer;
  vectorSourceMap: VectorSource;
  dibujoUsuario: Draw;
  layerZonas: VectorLayer;
  layerCasa: VectorLayer;
  layerCirculo: VectorLayer;
  layerAreaSeleccionada: VectorLayer;
  vectorDraw: VectorLayer;
  vectorSourceDraw: VectorSource;

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
        zoom: this.zoom
      })
    });

    this.restaurante = this.navParams.get('restaurant');
    if (this.restaurante !== undefined) {
      this.restaurante.forEach((restaurante: Restaurant) => this.dibujarRestaurante(restaurante));
    }
  }

  dibujarRestaurante(restaurante: Restaurant) {
    this.locRestaurante = transform(restaurante.geometry.coordinates, 'EPSG:4326', 'EPSG:3857')

    let view: View = this.map.getView();
    view.setZoom(16);
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
    let ubcCoords = transform(coords, 'EPSG:4326', 'EPSG:3857');

    let view: View = this.map.getView();
    view.setZoom(18);
    view.setCenter(ubcCoords);

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
      geometry: new Point(ubcCoords)
    });

    let vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [feature]
      })
    });

    feature.setStyle(estiloPointer);
    this.map.addLayer(vectorLayer);
  }

  localizarPorAPI() {


    this.ubicacion = [];
    this.http.get<Location>('https://ipapi.co/json')
      .subscribe(res => {
        this.ubicacion = [res.longitude, res.latitude];
        if (this.ubicacion.length > 0) {
          this.dibujarUbicacion(this.ubicacion);
        }
      });
  }
  //TODO https://stackoverflow.com/questions/10109620/openlayers-how-to-calculate-distance-between-two-points
}

