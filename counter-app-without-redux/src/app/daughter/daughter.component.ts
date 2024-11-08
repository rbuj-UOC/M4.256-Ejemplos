import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-daughter',
  templateUrl: './daughter.component.html',
  styleUrl: './daughter.component.scss'
})
export class DaughterComponent {
  @Input() counter!: number;
  @Output() changeCounter = new EventEmitter<number>();

  duplicate(): void {
    this.counter = this.counter * 2;
    this.changeCounter.emit(this.counter);
  }

  resetGrandDaughter(newCounter: number): void {
    this.counter = newCounter;
    this.changeCounter.emit(this.counter);
  }
}
