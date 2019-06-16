export abstract class Figure {
  protected constructor(public fields: string[]) {}

  /**
   * Returns figure circuit
   *
   */
  public getCircuit() {}

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
  public getFields(): string[] {
    return this.fields.map(fieldName => this[fieldName]);
  }
}
