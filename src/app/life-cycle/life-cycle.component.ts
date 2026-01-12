import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'app-life-cycle',
  imports: [NgIf, FooterComponent],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css',
})
export class LifeCycleComponent {
  firstCalled = '';
  nextCalled = '';
  lastCalled = '';

  count = 0;

  constructor() {
    this.firstCalled = 'constructor called';
  }

  ngOnInit() {
    this.nextCalled = 'ngOnInit called';
  }

  ngOnDestroy() {
    console.log('destroy method called');
  }

  counter(event: Event) {
    this.count++;
  }
}
