import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChartThreeComponent } from './my-chart-three.component';

describe('MyChartThreeComponent', () => {
  let component: MyChartThreeComponent;
  let fixture: ComponentFixture<MyChartThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyChartThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChartThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
