import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayEntryComponent } from './day-entry.component';

describe('DayEntryComponent', () => {
  let component: DayEntryComponent;
  let fixture: ComponentFixture<DayEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
