import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarGreyComponent } from './star-grey.component';

describe('StarGreyComponent', () => {
  let component: StarGreyComponent;
  let fixture: ComponentFixture<StarGreyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarGreyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarGreyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
