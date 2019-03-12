import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EksponeringComponent } from './eksponering.component';

describe('EksponeringComponent', () => {
  let component: EksponeringComponent;
  let fixture: ComponentFixture<EksponeringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EksponeringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EksponeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
