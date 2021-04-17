import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip
);

@Component({
  selector: 'app-my-chart-two',
  templateUrl: './my-chart-two.component.html',
  styleUrls: ['./my-chart-two.component.less']
})
export class MyChartTwoComponent implements AfterViewInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;
  public canvas:any;
  public ctx:any;
  public labels:any=['0', '27', '60', '75','90', '110', '123', '140','155','170','185','225','250'];
  public dataCases:number[]= [0, 1, 7, 3, 7, 5, 14,2,10,4,6,1,0];
  public dataCesesNext:number[]= [0, 2, 18, 8, 13, 11, 56,15,26,11,13,3,0];
  constructor() { }
  ngAfterViewInit(): void {
    if(this.lineCanvas) {
      this.lineChartMethod(this.lineCanvas);
    }
  }
  lineChartMethod(el: ElementRef): void {
    this.lineChart = new Chart(el.nativeElement, {
          type:'line',
          data:{
            labels:this.labels,
            datasets:[{
              data:this.dataCases,
              pointRadius:0,
              tension:0.3,
              backgroundColor:'#3993bb',
              fill:true,
            },
            {
              tension:0.3,
              pointBorderWidth:0,
              pointRadius:0,
              data:[0, 2, 18, 8, 13, 11, 56,15,26,11,13,3,0],
              backgroundColor:'#86d3ce',
              fill:true,
            }
            ]
          },
          options:{
            responsive:true,
            plugins: {
              legend: {
                   display: false,

                 }
            }
            // legend:{
            //   display:false,
            // },
          },
    });
  }
}
