import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions';
import {clearComplete} from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.validFilters = 'todos';
  filtros: actions.validFilters[] = ['todos', 'completados', 'pendientes'];
  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filter').subscribe( filter => this.filtroActual = filter );
    this.store.subscribe( state => {
      this.filtroActual = state.filter;
      this.pendientes = state.todos.filter( todo => !todo.complete).length;
    });
  }

  changeFilter(filtro: actions.validFilters) {
    this.store.dispatch(actions.setfilter({ filter: filtro}));
  }

  clearComplete() {
    this.store.dispatch(clearComplete());
  }
}
