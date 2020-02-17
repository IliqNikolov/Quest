import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HightScoreComponent } from './hight-score.component';

describe('HightScoreComponent', () => {
  let component: HightScoreComponent;
  let fixture: ComponentFixture<HightScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HightScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HightScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
