import { Action, createReducer, on } from '@ngrx/store';
import { TodoDTO } from './models/todo.dto';
import { completeTodo, createTodo } from './todo.actions';

export const initialState: TodoDTO[] = [
  new TodoDTO('Read Dennis Ritchie`s book')
];

const _todoReducer = createReducer(
  initialState,
  on(createTodo, (state, { title }) => [...state, new TodoDTO(title)]),
  on(completeTodo, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: true
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state, action: Action) {
  return _todoReducer(state, action);
}
