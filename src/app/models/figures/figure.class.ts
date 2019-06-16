import { FigureControl } from '../index';

export abstract class Figure  {
  private _formFields: FigureControl[];

   /**
   * Updates figure field values
   *
   * @param  {object} values
   * @param  {number}} height
   */
  public updateValues(values: object): void {}

  /**
   * Returns figure perimeter
   *
   */
  public getPerimeter() {}

  /**
   * Returns figure surface area
   *
   */
  public getSurfaceArea() {}

  /**
   * Returns fields name for form
   *
   * @returns string
   */
  public getFields(): FigureControl[] {
    return this._formFields;
  }

  /**
   * Sets form fields value
   *
   * @param  {FigureControl[]} fields
   */
  protected setFormFields(fields: FigureControl[]): void {
    this._formFields = fields;
  }
}
