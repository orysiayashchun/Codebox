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
  Tooltip,
  Point
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
  selector: 'app-my-chart-one',
  templateUrl: './my-chart-one.component.html',
  styleUrls: ['./my-chart-one.component.less']
})
export class MyChartOneComponent implements AfterViewInit {
  @ViewChild('barCanvas') private barCanvas?: ElementRef;
  barChart: any;
  public lineChartLegend:boolean = true;
  public canvas: any;
  public ctx: any;

  constructor() { }

  /*ngOnInit(): void {
    this.createGraph();
  }*/

  ngAfterViewInit(): void {
    if(this.barCanvas) {
      this.barChartMethod(this.barCanvas);
    }
  }

  barChartMethod(el: ElementRef): void {
    this.barChart = new Chart(el.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['United States', 'Russia', 'Italy', 'Germany', 'Other'],
        datasets: [{
          // label: '# of Votes',
          data: [24, 16, 10,30, 20],
          backgroundColor:
            ['#3993bb','#65b5c2','#23649e','#2e7bad','#63daed']
          ,
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
    //
    //     legend:{
		// 	display:false,
		// }
      }

    });
  }
}
