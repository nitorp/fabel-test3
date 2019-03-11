import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenereltComponent } from './generelt.component';

describe('GenereltComponent', () => {
  let component: GenereltComponent;
  let fixture: ComponentFixture<GenereltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenereltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenereltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
