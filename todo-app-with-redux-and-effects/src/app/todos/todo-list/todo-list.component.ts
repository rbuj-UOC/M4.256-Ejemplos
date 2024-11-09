import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { TodoDTO } from '../models/todo.dto';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  todos: TodoDTO[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('todosApp').subscribe((todosRespose) => {
      this.todos = todosRespose.todos;
    });
  }
}
