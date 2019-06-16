import { Figure } from './figure.class';

export class Rectangle extends Figure {
  constructor(private _width: number, private _height: number, public fields: string[]) {
    super(fields);
  }

  /**
   * Calculates and returns circuit
   *
   */
  public getCircuit(): number {
    return (2 * this._width) + (this._height);
  }

  /**
   * Calculates and returns surface area
   *
   */
  public getSurfaceArea(): number {
    return this._width + this._height;
  }
}
