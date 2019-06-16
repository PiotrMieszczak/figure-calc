import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AkitaNgFormsManager } from '@datorama/akita-ng-forms-manager';

export interface ChoiceFormState {
  choiceForm: {
    selectedFigureType: string;
    selectedCalculationType: string;
  };
}

const enum INITIAL_STATE  {
  selectedFigureType = 'rectangle',
  selectedCalculationType = 'circuit'
}

@Component({
  selector: 'app-choice-form',
  templateUrl: './choice-form.component.html',
  styleUrls: ['./choice-form.component.scss']
})
export class ChoiceFormComponent {
  public figureTypes: string[] = ['square', 'rectangle', 'circle'];
  public calcTypes: string[] = ['surface area', 'circuit'];
  public choiceFormGroup: FormGroup;

  constructor(private _fb: FormBuilder,
    private formsManager: AkitaNgFormsManager<ChoiceFormState>) {
    this.createFormGroup();
    this.assignFormGroupToStateManager();
  }

  /**
   * Unsubscribes unnecessary subscriptions on component destroy
   * 
   * @returns void
   */
  ngOnDestroy(): void {
    this.formsManager.unsubscribe();
  }

  /**
   * Creates form group controls
   *
   * @returns void
   */
  createFormGroup(): void {
    this.choiceFormGroup = this._fb.group({
      selectedCalculationType: ['', Validators.required],
      selectedFigureType: ['', Validators.required],
    });
  }

  /**
   * Assigns form group do global form management state
   * 
   * @returns void
   */
  assignFormGroupToStateManager(): void {
    this.formsManager.upsert('choiceForm', this.choiceFormGroup);
  }
}
