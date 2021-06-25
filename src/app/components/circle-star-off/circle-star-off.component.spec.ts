import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleStarOffComponent } from './circle-star-off.component';

describe('CircleStarOffComponent', () => {
  let component: CircleStarOffComponent;
  let fixture: ComponentFixture<CircleStarOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleStarOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleStarOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
