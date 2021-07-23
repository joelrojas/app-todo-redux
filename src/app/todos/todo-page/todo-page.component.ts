import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {toggleAll} from '../todo.actions';
import {AppState} from '../../app.reducer';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  complete: boolean = false;
  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  toggleAll() {
    this .complete = !this.complete;
    console.log(this.complete);
    this.store.dispatch(toggleAll({complete: this.complete}));
  }
}
