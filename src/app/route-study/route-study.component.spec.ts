import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteStudyComponent } from './route-study.component';

describe('RouteStudyComponent', () => {
  let component: RouteStudyComponent;
  let fixture: ComponentFixture<RouteStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteStudyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
