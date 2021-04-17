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
  Tooltip,

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
  ngAfterViewInit(): void {
    if(this.barCanvas) {
      this.barChartMethod(this.barCanvas);
    }
  }

addText(chart,element){
  var width = chart.chart.width,
      height = chart.chart.height,
      ctx = chart.chart.element;

  // ctx.restore();
  // var fontSize = (height / 150).toFixed(2);
  // ctx.font = fontSize + "em sans-serif";
  // ctx.textBaseline = "middle";
  // var text = "84.254 VISITS",
  //     textX = Math.round((width - ctx.measureText(text).width)/2),
  //     textY = height / 2;
  //
  // ctx.fillText(text, textX, textY);
  // ctx.save();
}


  barChartMethod(el: ElementRef): void {
    this.barChart = new Chart(el.nativeElement, {
      type: 'doughnut',
    //   plugins:[{beforeInit: addText(this.barChart,el.nativeElement) }
    //
    // ],

      data: {
        labels: ['United States', 'Russia', 'Italy', 'Germany', 'Other'],
        datasets: [{
          data: [24, 16, 10,30, 20],
          backgroundColor:
            ['#3993bb','#65b5c2','#23649e','#2e7bad','#63daed']
          ,
          borderWidth: 0
        }]
      },
      options: {
        rotation:273,
        cutout:60,
        responsive: true,
         plugins: {
           legend: {
                display: false,
              },
              //beforeInit: addText(this.barChart,el.nativeElement)


         }
      }
    });
  }
}
