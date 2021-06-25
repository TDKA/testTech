import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleSmallComponent } from './circle-small.component';

describe('CircleSmallComponent', () => {
  let component: CircleSmallComponent;
  let fixture: ComponentFixture<CircleSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
