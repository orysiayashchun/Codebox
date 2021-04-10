import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageElevenComponent } from './sample-page-eleven.component';

describe('SamplePageElevenComponent', () => {
  let component: SamplePageElevenComponent;
  let fixture: ComponentFixture<SamplePageElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePageElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
