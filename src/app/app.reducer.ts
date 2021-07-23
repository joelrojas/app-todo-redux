import {Todo} from './todos/models/todo.model';
import {ActionReducerMap} from '@ngrx/store';
import {todoReducer} from './todos/todo.reducers';
import {validFilters} from './filtro/filtro.actions';
import {filterReducer} from './filtro/filtro.reducers';

export interface AppState {
  todos: Todo[];
  filter: validFilters;
}


export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
}
