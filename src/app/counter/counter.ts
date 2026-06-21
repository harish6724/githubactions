import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = 0;
  bumping = false;

  increment(): void {
    this.count++;
    this.triggerBump();
  }

  decrement(): void {
    this.count--;
    this.triggerBump();
  }

  reset(): void {
    this.count = 0;
    this.triggerBump();
  }

  private triggerBump(): void {
    this.bumping = true;
    setTimeout(() => { this.bumping = false; }, 150);
  }
}
