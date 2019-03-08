import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinebestillingerComponent } from './minebestillinger.component';

describe('MinebestillingerComponent', () => {
  let component: MinebestillingerComponent;
  let fixture: ComponentFixture<MinebestillingerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinebestillingerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinebestillingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
