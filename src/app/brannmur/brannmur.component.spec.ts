import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrannmurComponent } from './brannmur.component';

describe('BrannmurComponent', () => {
  let component: BrannmurComponent;
  let fixture: ComponentFixture<BrannmurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrannmurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrannmurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
