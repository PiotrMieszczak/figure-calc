import { Figure } from './figure.class';
import { FormControls, FigureControl } from '../forms/figure-control.interface';

const PI_VALUE = 3.141;
const POW_VALUE = 2;

export class Circle extends Figure implements FormControls {

  constructor(private _radius: number) {
    super();
    this.createFormControls();
  }

  /**
   * Updates figure field values
   *
   * @param  {{width:number} values
   * @param  {number}} height
   */
  public updateValues(values: { radius: number }): void {
    this._radius = values.radius;
  }

  /**
   * Calculates and returns perimeter
   *
   */
  public getPerimeter(): number {
    return POW_VALUE * PI_VALUE * this._radius;
  }

  /**
   * Calculates and returns surface area
   *
   */
  public getSurfaceArea(): number {
    return  PI_VALUE * Math.pow(this._radius, POW_VALUE);
  }

  /**
   * Creates figure form controls
   *
   * @returns void
   */
  public createFormControls(): void {
    const radiusControl = new FigureControl('radius', 'Enter width value');
    this.setFormFields([radiusControl]);
  }
}
