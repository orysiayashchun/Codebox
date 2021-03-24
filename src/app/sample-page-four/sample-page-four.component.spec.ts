import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageFourComponent } from './sample-page-four.component';

describe('SamplePageFourComponent', () => {
  let component: SamplePageFourComponent;
  let fixture: ComponentFixture<SamplePageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
