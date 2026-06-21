import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter } from './counter';

describe('Counter', () => {
  let component: Counter;
  let fixture: ComponentFixture<Counter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter],
    }).compileComponents();

    fixture = TestBed.createComponent(Counter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('starts at zero', () => {
    expect(component.count).toBe(0);
  });

  it('increments by 1', () => {
    component.increment();
    expect(component.count).toBe(1);
  });

  it('decrements below zero', () => {
    component.decrement();
    expect(component.count).toBe(-1);
  });

  it('resets to zero regardless of current value', () => {
    component.increment();
    component.increment();
    component.reset();
    expect(component.count).toBe(0);
  });
});
