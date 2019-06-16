import { Rectangle } from './rectangle.class';
import { FormControls, FigureControl } from '../forms/figure-control.interface';

export class Square extends Rectangle implements FormControls {

  constructor(private _edge: number) {
    super(_edge, _edge);
  }

  /**
   * Creates figure form controls
   *
   * @returns void
   */
  public createFormControls(): void {
    const edgeControl = new FigureControl('edge', 'Enter edge value');
    this.setFormFields([edgeControl]);
  }
}
