import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageSevenComponent } from './sample-page-seven.component';

describe('SamplePageSevenComponent', () => {
  let component: SamplePageSevenComponent;
  let fixture: ComponentFixture<SamplePageSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePageSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
