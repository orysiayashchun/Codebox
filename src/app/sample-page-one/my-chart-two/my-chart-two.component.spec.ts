import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChartTwoComponent } from './my-chart-two.component';

describe('MyChartTwoComponent', () => {
  let component: MyChartTwoComponent;
  let fixture: ComponentFixture<MyChartTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyChartTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChartTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
