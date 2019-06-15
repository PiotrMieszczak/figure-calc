import { FormStore, UiState } from './form.store';

export class SessionService {

  constructor(private _formStore: FormStore) {}

  /**
   * Updates ui state
   *
   * @param newState
   */
  updateUserName(newState: UiState): void {
    this._formStore.update({ ui: newState });
  }
}
