import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../counter.actions';

@Component({
  selector: 'app-daughter',
  templateUrl: './daughter.component.html',
  styleUrl: './daughter.component.scss'
})
export class DaughterComponent implements OnInit {
  counter!: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('counter')
      .subscribe((counter) => (this.counter = counter));
  }

  duplicate(): void {
    this.store.dispatch(actions.duplicate({ number: 2 }));
  }
}
