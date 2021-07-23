import { createReducer, on } from '@ngrx/store';
import { setfilter, validFilters} from './filtro.actions';

export const initialState: validFilters = 'todos';

const _filterReducer = createReducer(initialState,
  on(setfilter, (state, { filter }) => filter)
);

export function filterReducer(state, action) {
  return _filterReducer(state, action);
}
