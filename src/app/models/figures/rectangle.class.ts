import { Figure } from './figure.class';
import { FormControls, FigureControl } from '../forms/figure-control.interface';

const MULTIPLIER = 2;

export class Rectangle extends Figure implements FormControls {
  constructor(protected _width: number, protected _height: number) {
    super();
    this.createFormControls();
  }

  /**
   * Updates figure field values
   *
   * @param  {{width:number} values
   * @param  {number}} height
   */
  public updateValues(values: { width: number, height: number }): void {
    this._width = values.width;
    this._height = values.height;
  }

  /**
   * Calculates and returns perimeter
   *
   */
  public getPerimeter(): number {
    return (MULTIPLIER * this._width) + (MULTIPLIER * this._height);
  }

  /**
   * Calculates and returns surface area
   *
   */
  public getSurfaceArea(): number {
    return this._width * this._height;
  }

  /**
   * Creates figure form controls
   *
   * @returns void
   */
  public createFormControls(): void {
    const widthControl = new FigureControl('width', 'Enter width value');
    const heightControl = new FigureControl('height', 'Enter height value');
    this.setFormFields([widthControl, heightControl]);
  }
}
