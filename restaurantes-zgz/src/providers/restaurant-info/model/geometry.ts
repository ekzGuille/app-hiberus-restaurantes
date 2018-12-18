export class Geometry {
  private _type: string;
  private _coordinates: number[];

	constructor(type: string, coordinates: number[]) {
		this._type = type;
		this._coordinates = coordinates;
	}


    /**
     * Getter type
     * @return {string}
     */
	public get type(): string {
		return this._type;
	}

    /**
     * Setter type
     * @param {string} value
     */
	public set type(value: string) {
		this._type = value;
	}

    /**
     * Setter coordinates
     * @param {number[]} value
     */
	public set coordinates(value: number[]) {
		this._coordinates = value;
	}
    /**
     * Getter coordinates
     * @return {number[]}
     */
	public get coordinates(): number[] {
		return this._coordinates;
	}


}
