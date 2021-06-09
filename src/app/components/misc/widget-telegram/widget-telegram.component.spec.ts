import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTelegramComponent } from './widget-telegram.component';

describe('WidgetTelegramComponent', () => {
  let component: WidgetTelegramComponent;
  let fixture: ComponentFixture<WidgetTelegramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetTelegramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTelegramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
