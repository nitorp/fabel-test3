import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Brannmur2Component } from './brannmur2.component';

describe('Brannmur2Component', () => {
  let component: Brannmur2Component;
  let fixture: ComponentFixture<Brannmur2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Brannmur2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Brannmur2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
