import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleBigComponent } from './circle-big.component';

describe('CircleBigComponent', () => {
  let component: CircleBigComponent;
  let fixture: ComponentFixture<CircleBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleBigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
