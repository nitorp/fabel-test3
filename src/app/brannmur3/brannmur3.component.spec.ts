import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Brannmur3Component } from './brannmur3.component';

describe('Brannmur3Component', () => {
  let component: Brannmur3Component;
  let fixture: ComponentFixture<Brannmur3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Brannmur3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Brannmur3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
