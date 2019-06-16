import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';
import { Figure, Square, Rectangle, Circle, FigureControl } from '../../models';

const ONLY_NUMBER_PATTERN = '^[0-9]*$';
const MIN_VALUE = 1;

@Injectable({
  providedIn: 'root'
})
export class ResultFormService {

  /**
   * Creates form group
   *
   * @param  {string[]} controlsNames
   * @returns FormGroup
   */
  public createFormGroup(controls: FigureControl[]): FormGroup {
    const group: {[key: string]: AbstractControl} = {};
    controls.forEach(control => {
      group[control.name] =  new FormControl('', [
        Validators.required,
        Validators.pattern(ONLY_NUMBER_PATTERN),
        Validators.min(MIN_VALUE)
      ]);
    });
    return new FormGroup(group);
  }

  /**
   * Creates figure object based on type selected at choice form
   *
   * @param  {string} figureType
   * @returns Figure
   */
  public createFigureBasedOnCtrlValue(figureType: string): Figure {
    switch (figureType) {
      case 'square':
        return new Square(null);
      case 'rectangle':
        return new Rectangle(null, null);
      case 'circle':
        return new Circle(null);
      default:
        break;
    }
  }
}
