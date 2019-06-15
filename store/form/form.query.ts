import { Query } from '@datorama/akita';
import { FormStore, FormState } from './form.store';

export class FormQuery extends Query<FormState> {
  constructor(protected store: FormStore) {
    super(store);
  }
}
