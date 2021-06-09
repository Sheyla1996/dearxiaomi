/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EnComponent } from './en.component';

describe('EnComponent', () => {
  let component: EnComponent;
  let fixture: ComponentFixture<EnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
