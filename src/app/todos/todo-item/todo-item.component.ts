import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Todo} from '../models/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {deleteTodo, edit, toggle} from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  chkComplete: FormControl;
  txtInput: FormControl;
  editing: boolean;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.chkComplete = new FormControl(this.todo.complete);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkComplete.valueChanges.subscribe( value => {
      console.log(value);
      this.store.dispatch(toggle({id: this.todo.id}));
    });
  }

  edit() {
    this.editing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout( () => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
    console.log('edit ', this.editing);
  }

  endEditing() {
    this.editing = false;
    console.log('end editing', this.editing);
    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todo.text) { return; }
    this.store.dispatch(edit({id: this.todo.id, text: this.txtInput.value}));
  }

  delete() {
    this.store.dispatch(deleteTodo({ id: this.todo.id}));
  }
}
