import { Figure } from './figure.class';

const PI_VALUE = 3.141;
const POW_VALUE = 2;

export class Circle extends Figure {
  constructor(private _radius: number, public fields: string[]) {
    super(fields);
  }

  /**
   * Calculates and returns circuit
   *
   */
  public getCircuit(): number {
    return POW_VALUE * PI_VALUE * this._radius;
  }

  /**
   * Calculates and returns surface area
   *
   */
  public getSurfaceArea(): number {
    return  PI_VALUE * Math.pow(this._radius, POW_VALUE);
  }
}
