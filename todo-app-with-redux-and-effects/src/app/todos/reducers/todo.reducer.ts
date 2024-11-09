import { Action, createReducer, on } from '@ngrx/store';
import {
  completeTodo,
  createTodo,
  deleteTodo,
  editTodo,
  getAllTodos,
  getAllTodosError,
  getAllTodosSuccess
} from '../actions';
import { TodoDTO } from '../models/todo.dto';

export interface TodoState {
  todos: TodoDTO[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialState: TodoState = {
  todos: [new TodoDTO('Read Dennis Ritchie`s book')],
  loading: false,
  loaded: false,
  error: null
};

const _todoReducer = createReducer(
  initialState,
  on(completeTodo, (state, { id }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [
      ...state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            done: true
          };
        } else {
          return todo;
        }
      })
    ]
  })),
  on(createTodo, (state, { title }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [...state.todos, new TodoDTO(title)]
  })),
  on(deleteTodo, (state, { id }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [...state.todos.filter((todo) => todo.id != id)]
  })),
  on(editTodo, (state, { id, title }) => ({
    ...state,
    loading: false,
    loaded: false,
    todos: [
      ...state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title
          };
        } else {
          return todo;
        }
      })
    ]
  })),
  on(getAllTodos, (state) => ({ ...state, loading: true })),
  on(getAllTodosError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: payload
  })),
  on(getAllTodosSuccess, (state, { todos }) => ({
    ...state,
    loading: false,
    loaded: true,
    todos: [...todos]
  }))
);

export function todoReducer(state, action: Action) {
  return _todoReducer(state, action);
}
