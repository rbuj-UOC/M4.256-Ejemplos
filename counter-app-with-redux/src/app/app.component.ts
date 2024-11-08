import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from './Counter/counter.actions';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'counter-app-with-redux';
  counter!: number;

  constructor(private store: Store<AppState>) {
    // this.counter = 20;
    this.store.select('counter').subscribe((counter) => {
      this.counter = counter;
    });
  }

  increase(): void {
    // this.counter = this.counter + 1;
    this.store.dispatch(increment());
  }

  decrease(): void {
    //this.counter = this.counter - 1;
    this.store.dispatch(decrement());
  }
}
