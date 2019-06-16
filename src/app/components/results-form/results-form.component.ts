import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AkitaNgFormsManager } from '@datorama/akita-ng-forms-manager';

import { map, filter } from 'rxjs/operators';
import { ChoiceFormValue, Figure, FigureControl, Square } from '../../models';
import { ResultFormService } from './result-form.service';

@Component({
  selector: 'app-results-form',
  templateUrl: './results-form.component.html',
  styleUrls: ['./results-form.component.scss']
})
export class ResultsFormComponent implements OnInit {
  public resultFormGroup: FormGroup;
  public controls: FigureControl[] = [];
  public calculationType: string = '';
  public figure: Figure;

  constructor(private _resultFormService: ResultFormService,
    private _formsManager: AkitaNgFormsManager<any>) {
      this.startsSubForChoiceFormChanges();
    }

  ngOnInit() {
    this.startsSubForResultFormChangeValue();
  }

  /**
   * Starts sub for changes in result form
   * 
   * 
   * @returns void
   */
  startsSubForResultFormChangeValue(): void {
    this._formsManager.selectForm('resultForm')
    .pipe(
      filter(form => form.valid),
      map(res => res.value),
    )
    .subscribe(formValue => {
      this.updateFigureData(formValue);
    });
  }

  /**
   * Updates figure values
   *
   * @returns void
   */
  updateFigureData(formValue): void {
    this.figure instanceof Square ? this.figure.updateValues({width: formValue.edge, height: formValue.edge}) :
      this.figure.updateValues(formValue);
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
        this.calculationType = formValue.selectedCalculationType;
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
    this.figure = figure;
    this.controls = figure.getFields();
  }

  /**
   * Creates form group
   *
   * @returns void
   */
  private createFormGroup(): void {
    this.resultFormGroup = this._resultFormService.createFormGroup(this.controls);
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
