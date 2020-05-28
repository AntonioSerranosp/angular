import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetratoComponent } from './retrato.component';

describe('RetratoComponent', () => {
  let component: RetratoComponent;
  let fixture: ComponentFixture<RetratoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetratoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
