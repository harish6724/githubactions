import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = 0;
  increment(): void { this.count++; }
  decrement(): void { this.count--; }
  reset(): void { this.count = 0; }
}
