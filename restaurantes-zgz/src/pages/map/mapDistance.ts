
export class MapDistance {

  private toRad(x: number): number { return x * Math.PI / 180; }

  midCoords(coords1: number[], coords2: number[]): number[] {
    return [(coords1[0] + coords2[0]) / 2, (coords1[1] + coords2[1]) / 2];
  }

  distance2Points(coords1: number[], coords2: number[]): number {

    let lat1 = coords1[1];
    let lon1 = coords1[0];
    let lat2 = coords2[1];
    let lon2 = coords2[0];

    let R = 6371;
    let dLon = this.toRad(lon2 - lon1);
    lat1 = this.toRad(lat1);
    lat2 = this.toRad(lat2);
    let d = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(dLon)) * R;
    return d;
  }


}
