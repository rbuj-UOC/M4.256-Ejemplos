import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-slow',

  templateUrl: './loading-slow.component.html',
  styleUrl: './loading-slow.component.scss'
})
export class LoadingSlowComponent {
  constructor() {
    console.log('LoadingSlowComponent');

    const start = Date.now();
    while (Date.now() - start < 3000) {}
  }
}
