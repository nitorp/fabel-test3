import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinnerikkesidenComponent } from './finnerikkesiden.component';

describe('FinnerikkesidenComponent', () => {
  let component: FinnerikkesidenComponent;
  let fixture: ComponentFixture<FinnerikkesidenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinnerikkesidenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinnerikkesidenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
