import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastbalanseringComponent } from './lastbalansering.component';

describe('LastbalanseringComponent', () => {
  let component: LastbalanseringComponent;
  let fixture: ComponentFixture<LastbalanseringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastbalanseringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastbalanseringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
