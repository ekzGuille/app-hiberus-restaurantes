import { Restaurant } from "./model/restaurant";

export class RestaurantResponse {

  totalCount: number;
  start: number;
  rows: number;
  result: Restaurant[];

}
