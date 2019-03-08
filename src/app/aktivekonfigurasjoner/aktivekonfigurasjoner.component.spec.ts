import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktivekonfigurasjonerComponent } from './aktivekonfigurasjoner.component';

describe('AktivekonfigurasjonerComponent', () => {
  let component: AktivekonfigurasjonerComponent;
  let fixture: ComponentFixture<AktivekonfigurasjonerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktivekonfigurasjonerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktivekonfigurasjonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
