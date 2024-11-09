import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  declarations: [TodoListComponent, TodoListItemComponent, TodoAddComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [TodoListItemComponent, TodoListComponent, TodoAddComponent]
})
export class TodoModule {}
