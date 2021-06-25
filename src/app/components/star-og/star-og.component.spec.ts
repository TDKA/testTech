import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarOGComponent } from './star-og.component';

describe('StarOGComponent', () => {
  let component: StarOGComponent;
  let fixture: ComponentFixture<StarOGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarOGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarOGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
