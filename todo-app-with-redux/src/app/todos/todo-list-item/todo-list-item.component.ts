import { Component, Input } from '@angular/core';
import { TodoDTO } from '../models/todo.dto';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss'
})
export class TodoListItemComponent {
  @Input() todo!: TodoDTO;

  constructor() {}
}
