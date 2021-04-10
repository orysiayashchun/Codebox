import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageSixComponent } from './sample-page-six.component';

describe('SamplePageSixComponent', () => {
  let component: SamplePageSixComponent;
  let fixture: ComponentFixture<SamplePageSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePageSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
