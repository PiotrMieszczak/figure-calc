import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AkitaNgFormsManager } from '@datorama/akita-ng-forms-manager';

import { map, filter } from 'rxjs/operators';
import { ChoiceFormValue, Figure, FigureControl } from '../../models';
import { ResultFormService } from './result-form.service';

@Component({
  selector: 'app-results-form',
  templateUrl: './results-form.component.html',
  styleUrls: ['./results-form.component.scss']
})
export class ResultsFormComponent {
  public resultFormGroup: FormGroup;
  public controls: FigureControl[] = [];

  private _calculationType: string[] = [];
  private _figure: Figure;

  constructor(private _resultFormService: ResultFormService,
    private _formsManager: AkitaNgFormsManager<any>) {
      this.startsSubForChoiceFormChanges();
    }

   /**
   * Unsubscribes unnecessary subscriptions on component destroy
   *
   * @returns void
   */
  ngOnDestroy(): void {
    this._formsManager.unsubscribe();
  }

  /**
   * Starts sub for choiceForm value changes
   * 
   * @returns void
   */
  private startsSubForChoiceFormChanges(): void {
    this._formsManager.selectForm('choiceForm')
    .pipe(
      map(res => res.value),
      filter((formValue: ChoiceFormValue) => !!(formValue.selectedCalculationType && formValue.selectedFigureType)),
      map((formValue: ChoiceFormValue) => {
        return this._resultFormService.createFigureBasedOnCtrlValue(formValue.selectedFigureType);
      })
    )
    .subscribe((figure: Figure) => {
      this.assignFormValuesToLocalVariables(figure);
      this.createFormGroup();
      this.assignFormGroupToStateManager();
    });
  }

  /**
   * Assigns form valus to local variables
   * 
   * @param  {Figure} figure
   * @returns void
   */
  private assignFormValuesToLocalVariables(figure: Figure): void {
    this._figure = figure;
    console.log(figure);
    console.log('assignFormValuesToLocalVariables', this.controls);
    this.controls = figure.getFields();
  }

  /**
   * Creates form group
   *
   * @returns void
   */
  private createFormGroup(): void {
    this.resultFormGroup = this._resultFormService.createFormGroup(this.controls);
    console.log('createFormGroup', this.resultFormGroup);
  }

  /**
   * Assigns form group do global form management state
   *
   * @returns void
   */
  private assignFormGroupToStateManager(): void {
    this._formsManager.upsert('resultForm', this.resultFormGroup);
  }
}
