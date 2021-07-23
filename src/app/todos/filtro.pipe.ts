import { Pipe, PipeTransform } from '@angular/core';
import {Todo} from './models/todo.model';
import {validFilters} from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: validFilters): Todo[] {
    console.log(filtro);
    switch (filtro) {
      case 'completados':
        return todos.filter(todo => todo.complete);
      case 'pendientes':
        return todos.filter(todo => !todo.complete);
      default:
        return todos;
    }
  }

}
