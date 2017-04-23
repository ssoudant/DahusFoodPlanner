import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketEntryComponent } from './basket-entry.component';

describe('BasketEntryComponent', () => {
  let component: BasketEntryComponent;
  let fixture: ComponentFixture<BasketEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
