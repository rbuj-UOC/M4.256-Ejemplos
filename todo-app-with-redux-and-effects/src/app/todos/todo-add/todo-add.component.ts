import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { createTodo } from '../actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
})
export class TodoAddComponent {
  titleInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.titleInput = new FormControl('', Validators.required);
  }

  addTodoTask() {
    if (this.titleInput.valid) {
      this.store.dispatch(createTodo({ title: this.titleInput.value }));
      this.titleInput.reset();
    }
  }
}
