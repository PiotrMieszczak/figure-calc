import { Figure } from './figure.class';
import { FormControls, FigureControl } from '../forms/figure-control.interface';

export class Rectangle extends Figure implements FormControls {
  constructor(private _width: number, private _height: number) {
    super();
    this.createFormControls();
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
