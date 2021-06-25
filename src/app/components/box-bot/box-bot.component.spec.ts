import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBotComponent } from './box-bot.component';

describe('BoxBotComponent', () => {
  let component: BoxBotComponent;
  let fixture: ComponentFixture<BoxBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
