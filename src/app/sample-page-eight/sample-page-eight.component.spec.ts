import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageEightComponent } from './sample-page-eight.component';

describe('SamplePageEightComponent', () => {
  let component: SamplePageEightComponent;
  let fixture: ComponentFixture<SamplePageEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePageEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
