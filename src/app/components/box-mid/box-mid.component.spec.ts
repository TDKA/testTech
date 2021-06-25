import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMidComponent } from './box-mid.component';

describe('BoxMidComponent', () => {
  let component: BoxMidComponent;
  let fixture: ComponentFixture<BoxMidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxMidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
