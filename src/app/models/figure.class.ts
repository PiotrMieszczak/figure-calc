export abstract class Figure {
  protected constructor(public fields: string[]) {}

  public getCircuit() { }

  public getSurfaceArea() {}

  public getFields(): string[] {
    return this.fields.map(fieldName => this[fieldName]);
  }
}
