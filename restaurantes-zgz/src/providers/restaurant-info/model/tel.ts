export class Tel {
  private _tel: string;
  private _fax: string;

  constructor(tel: string, fax: string) {
    this._tel = tel;
    this._fax = fax;
  }

    /**
     * Getter tel
     * @return {string}
     */
	public get tel(): string {
		return this._tel;
	}

    /**
     * Getter fax
     * @return {string}
     */
	public get fax(): string {
		return this._fax;
	}

    /**
     * Setter tel
     * @param {string} value
     */
	public set tel(value: string) {
		this._tel = value;
	}

    /**
     * Setter fax
     * @param {string} value
     */
	public set fax(value: string) {
		this._fax = value;
	}

}
