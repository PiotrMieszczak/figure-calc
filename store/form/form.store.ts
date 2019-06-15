import { Store, StoreConfig } from '@datorama/akita';

export interface UiState {
  selectedFigureType: string;
  selectedCalculationType: string;
}

export interface FormState  {
  ui: UiState;
}

const INITIAL_STATE = {
  ui: {
    selectedFigureType: null,
    selectedCalculationType: null
  }
};

/**
 * Creates initial states
 *
 */
export function createInitialState(): FormState {
  return INITIAL_STATE;
}

@StoreConfig({ name: 'form' })
export class FormStore extends Store<FormState> {
  constructor() {
    super(createInitialState());
  }
}
