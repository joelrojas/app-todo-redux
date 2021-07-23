import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import {clearComplete, create, deleteTodo, edit, toggle, toggleAll} from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Save world'),
  new Todo('Save '),
  new Todo('world'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text) ]),
  on(deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toggle, (state, { id }) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete
        };
      } else {
        return todo;
      }
    });
  }),
  on(edit, (state, {id, text}) => {
    return state.map( todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text
        };
      } else {
        return todo;
      }
    });
  }),
  on(toggleAll, (state, {complete}) => {
    return state.map( todo => {
      return {
        ...todo,
        complete
      };
    });
  }),
  on(clearComplete, state => state.filter( todo => !todo.complete))
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
