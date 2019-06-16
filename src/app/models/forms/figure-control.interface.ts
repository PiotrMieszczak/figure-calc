
export interface FormControls {

  /**
   * Creates form controls
   *
   * @returns void
   */
  createFormControls(): void;
}

export class FigureControl {
  constructor(public name: string, public placeholder?: string) { }
}
