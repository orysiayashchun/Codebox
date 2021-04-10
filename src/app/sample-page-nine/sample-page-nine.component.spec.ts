import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageNineComponent } from './sample-page-nine.component';

describe('SamplePageNineComponent', () => {
  let component: SamplePageNineComponent;
  let fixture: ComponentFixture<SamplePageNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePageNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
