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
  selector: 'app-my-chart-three',
  templateUrl: './my-chart-three.component.html',
  styleUrls: ['./my-chart-three.component.less']
})
export class MyChartThreeComponent implements AfterViewInit {

  @ViewChild('lineCanvas_2') private lineCanvas?: ElementRef;
  lineChart: any;
  public canvas:any;
  public ctx:any;
  public labels:any=['0','40','70','80','85','95','110','115','122','135','145','170','195','205','215','225','240',
	'250','280','290','300','310','315','325','335','345',
	'355','360','365','375','380','385','390','400','410','415','425',
	'430','435','440','450','455','470','510','530','550','580',
	'610','630','650','710','715','725','740','750','760','770','780','800','810','820','830','840','845','850','860','870','890','920','930','940',
	'950','990','1020','1030','1035','1057']
  public dataCases:number[]= [0,8,7,6,5,7,10,8,8,8,7,5,4,2,7,5,3,0,2,4,7,10,11,9,8,8,
		11,7,5,4,6,4,2,0,1,2,3,5,4,5,7,4,10,12,16,14,15,17,20,21,18,17,17,15,13,13,10,11,12,5,
		6,6,7,8,7,6,8,5,10,4,3,4,5,6,7,7,8,10];
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
          tension:0,
          backgroundColor:'#8db987',
          fill:true,
        },
        {
          tension:0,
          pointBorderWidth:0,
          pointRadius:0,
          data:[0,40,50,42,48,49,50,42,38,40,40,42,38,39,40,45,43,40,43,45,42,38,35,42,38,38,
          		39,42,43,50,48,39,35,34,42,40,35,28,25,30,29,35,38,40,34,32,31,28,25,32,31,42,40,41,45,48,35,32,31,29,
          		35,38,40,38,32,30,28,27,28,25,27,31,25,28,30,35,38,45],
          backgroundColor:'#90abe3',
          fill:true,
        },
        {
          tension:0,
          pointBorderWidth:0,
          pointRadius:0,
          data:[0,70,58,55,60,62,60,70,70,72,68,69,78,63,65,64,67,65,67,58,62,59,62,62,70,69,70,
            		80,80,75,78,75,76,73,75,74,76,70,70,57,59,57,62,60,64,50,43,43,50,57,56,50,61,59,61,56,55,58,56,56,59,
            		56,59,56,57,58,57,55,57,55,57,56,57,55,58,40,50,40,55],
          backgroundColor:'#dcc2f1',
          fill:true,
        }
        ]
      },
      options:{
        scales:{
    			x:
    			{
  					display:false
    			}
    		},
        plugins: {
          legend: {
               display: false,

             },
           }
        }
    });
  }
}
