import { Tel } from "./tel";
import { Geometry } from "./geometry";

export class Restaurant {

     private _id: number;
     private _title: string;
     private _streetAddress: string;
     private _postalCode: string;
     private _addressLocality: string;
     private _tel: Tel;
     private _email: string;
     private _url: string;
     private _image: string;
     private _logo: string;
     private _socioHoreca: boolean;
     private _accesibilidad: string;
     private _comment: string;
     private _tenedores: number;
     private _capacidad: number;
     private _geometry: Geometry;
     private _lastUpdated: string;
     private _description: string;
     private _sameAs: string;
     private _restauranteEnHotel: boolean;


     constructor(id: number, title: string, streetAddress: string, postalCode: string, addressLocality: string, tel: Tel, email: string, url: string, image: string, logo: string, socioHoreca: boolean, accesibilidad: string, comment: string, tenedores: number, capacidad: number, geometry: Geometry, lastUpdated: string, description: string, sameAs: string, restauranteEnHotel: boolean) {
          this._id = id;
          this._title = title;
          this._streetAddress = streetAddress;
          this._postalCode = postalCode;
          this._addressLocality = addressLocality;
          this._tel = tel;
          this._email = email;
          this._url = url;
          this._image = image;
          this._logo = logo;
          this._socioHoreca = socioHoreca;
          this._accesibilidad = accesibilidad;
          this._comment = comment;
          this._tenedores = tenedores;
          this._capacidad = capacidad;
          this._geometry = geometry;
          this._lastUpdated = lastUpdated;
          this._description = description;
          this._sameAs = sameAs;
          this._restauranteEnHotel = restauranteEnHotel;
     }

     /**
      * Getter id
      * @return {number}
      */
     public get id(): number {
          return this._id;
     }

     /**
      * Getter title
      * @return {string}
      */
     public get title(): string {
          return this._title;
     }

     /**
      * Getter streetAddress
      * @return {string}
      */
     public get streetAddress(): string {
          return this._streetAddress;
     }

     /**
      * Getter postalCode
      * @return {string}
      */
     public get postalCode(): string {
          return this._postalCode;
     }

     /**
      * Getter addressLocality
      * @return {string}
      */
     public get addressLocality(): string {
          return this._addressLocality;
     }

     /**
      * Getter tel
      * @return {Tel}
      */
     public get tel(): Tel {
          return this._tel;
     }

     /**
      * Getter email
      * @return {string}
      */
     public get email(): string {
          return this._email;
     }

     /**
      * Getter url
      * @return {string}
      */
     public get url(): string {
          return this._url;
     }

     /**
      * Getter image
      * @return {string}
      */
     public get image(): string {
          return this._image;
     }

     /**
      * Getter logo
      * @return {string}
      */
     public get logo(): string {
          return this._logo;
     }

     /**
      * Getter socioHoreca
      * @return {boolean}
      */
     public get socioHoreca(): boolean {
          return this._socioHoreca;
     }

     /**
      * Getter accesibilidad
      * @return {string}
      */
     public get accesibilidad(): string {
          return this._accesibilidad;
     }

     /**
      * Getter comment
      * @return {string}
      */
     public get comment(): string {
          return this._comment;
     }

     /**
      * Getter tenedores
      * @return {number}
      */
     public get tenedores(): number {
          return this._tenedores;
     }

     /**
      * Getter capacidad
      * @return {number}
      */
     public get capacidad(): number {
          return this._capacidad;
     }

     /**
      * Getter geometry
      * @return {Geometry}
      */
     public get geometry(): Geometry {
          return this._geometry;
     }

     /**
      * Getter lastUpdated
      * @return {string}
      */
     public get lastUpdated(): string {
          return this._lastUpdated;
     }

     /**
      * Getter description
      * @return {string}
      */
     public get description(): string {
          return this._description;
     }

     /**
      * Getter sameAs
      * @return {string}
      */
     public get sameAs(): string {
          return this._sameAs;
     }

     /**
      * Getter restauranteEnHotel
      * @return {boolean}
      */
     public get restauranteEnHotel(): boolean {
          return this._restauranteEnHotel;
     }

     /**
      * Setter id
      * @param {number} value
      */
     public set id(value: number) {
          this._id = value;
     }

     /**
      * Setter title
      * @param {string} value
      */
     public set title(value: string) {
          this._title = value;
     }

     /**
      * Setter streetAddress
      * @param {string} value
      */
     public set streetAddress(value: string) {
          this._streetAddress = value;
     }

     /**
      * Setter postalCode
      * @param {string} value
      */
     public set postalCode(value: string) {
          this._postalCode = value;
     }

     /**
      * Setter addressLocality
      * @param {string} value
      */
     public set addressLocality(value: string) {
          this._addressLocality = value;
     }

     /**
      * Setter tel
      * @param {Tel} value
      */
     public set tel(value: Tel) {
          this._tel = value;
     }

     /**
      * Setter email
      * @param {string} value
      */
     public set email(value: string) {
          this._email = value;
     }

     /**
      * Setter url
      * @param {string} value
      */
     public set url(value: string) {
          this._url = value;
     }

     /**
      * Setter image
      * @param {string} value
      */
     public set image(value: string) {
          this._image = value;
     }

     /**
      * Setter logo
      * @param {string} value
      */
     public set logo(value: string) {
          this._logo = value;
     }

     /**
      * Setter socioHoreca
      * @param {boolean} value
      */
     public set socioHoreca(value: boolean) {
          this._socioHoreca = value;
     }

     /**
      * Setter accesibilidad
      * @param {string} value
      */
     public set accesibilidad(value: string) {
          this._accesibilidad = value;
     }

     /**
      * Setter comment
      * @param {string} value
      */
     public set comment(value: string) {
          this._comment = value;
     }

     /**
      * Setter tenedores
      * @param {number} value
      */
     public set tenedores(value: number) {
          this._tenedores = value;
     }

     /**
      * Setter capacidad
      * @param {number} value
      */
     public set capacidad(value: number) {
          this._capacidad = value;
     }

     /**
      * Setter geometry
      * @param {Geometry} value
      */
     public set geometry(value: Geometry) {
          this._geometry = value;
     }

     /**
      * Setter lastUpdated
      * @param {string} value
      */
     public set lastUpdated(value: string) {
          this._lastUpdated = value;
     }

     /**
      * Setter description
      * @param {string} value
      */
     public set description(value: string) {
          this._description = value;
     }

     /**
      * Setter sameAs
      * @param {string} value
      */
     public set sameAs(value: string) {
          this._sameAs = value;
     }

     /**
      * Setter restauranteEnHotel
      * @param {boolean} value
      */
     public set restauranteEnHotel(value: boolean) {
          this._restauranteEnHotel = value;
     }


}