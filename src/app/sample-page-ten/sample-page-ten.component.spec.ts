import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePageTenComponent } from './sample-page-ten.component';

describe('SamplePageTenComponent', () => {
  let component: SamplePageTenComponent;
  let fixture: ComponentFixture<SamplePageTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamplePageTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePageTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
