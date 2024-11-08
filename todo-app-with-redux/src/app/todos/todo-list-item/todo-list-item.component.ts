import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { TodoDTO } from '../models/todo.dto';
import { completeTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss'
})
export class TodoListItemComponent implements OnInit {
  @Input() todo!: TodoDTO;
  public titleInput!: FormControl;
  public isEditing!: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isEditing = false;
    this.titleInput = new FormControl(this.todo.title, Validators.required);
  }

  completeTask(): void {
    this.store.dispatch(completeTodo({ id: this.todo.id }));
  }

  editTask(): void {
    this.isEditing = true;
  }

  deleteTask(): void {}

  submitTask(): void {
    this.isEditing = true;
  }
}
