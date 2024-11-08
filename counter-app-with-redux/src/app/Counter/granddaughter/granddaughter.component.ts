import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-granddaughter',
  templateUrl: './granddaughter.component.html',
  styleUrl: './granddaughter.component.scss'
})
export class GranddaughterComponent implements OnInit {
  counter!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('counter')
      .subscribe((counter) => (this.counter = counter));
  }

  reset(): void {
    this.store.dispatch(actions.reset());
  }
}
