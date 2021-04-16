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
  selector: 'app-my-chart-one',
  templateUrl: './my-chart-one.component.html',
  styleUrls: ['./my-chart-one.component.less']
})
export class MyChartOneComponent implements AfterViewInit {
  @ViewChild('barCanvas') private barCanvas?: ElementRef;
  barChart: any;

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

//
//     this.lineChart = new Chart('myChart', {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });
    // var chart = new Chart( "myChart", {
    //
    //     // The type of chart we want to create
    //     type: 'doughnut',
    //
    //     plugins: [
    //       {beforeDraw: function(chart) {
    //         var width = chart.chart.width,
    //             height = chart.chart.height,
    //             myChart = chart.chart.myChart;
    //
    //         myChart.restore();
    //         var fontSize = (height / 150).toFixed(2);
    //         myChart.font = fontSize + "em sans-serif";
    //         myChart.textBaseline = "middle";
    //         var text = "84.254 VISITS",
    //             textX = Math.round((width - myChart.measureText(text).width)/2),
    //             textY = height / 2;
    //
    //         myChart.fillText(text, textX, textY);
    //         myChart.save();
    //       }}
    //     ],
    //
    //     // The data for our dataset
    //     data: {
    //         labels: ['United States', 'Russia', 'Italy', 'Germany', 'Other'],
    //         datasets: [{
    //             label: 'My First dataset',
    //             backgroundColor: ['#3993bb','#65b5c2','#23649e','#2e7bad','#63daed'],
    //             //borderColor: 'rgb(255, 99, 132)',
    //             borderWidth:'0',
    //             data: [24, 16, 10,30, 20]
    //         }]
    //     },
    //
    //     // Configuration options go here
    //     options: {
    //         // plugins:{chart2},
    //       cutoutPercentage:60,
    //       title: { display: true,
    //         position: "center",
    //         text: 'Upcoming Meetings' },
    //
    //       legend:{
    //             display:false,
    //           },
    //             centertext: "123",
    //             rotation:60,
    //             animation:{
    //             animateScale:true
    //       }
    //     }
    // });

  barChartMethod(el: ElementRef): void {
    this.barChart = new Chart(el.nativeElement, {
      type: 'bar',
      data: {
        labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
        datasets: [{
          // label: '# of Votes',
          data: [200, 50, 30, 15, 20, 34],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      /*options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }*/
    });
  }

  /*createGraph(): void {
    /!*this.canvas = document.getElementById(chartId);
    this.ctx = this.canvas.getContext('2d');*!/

    if(this.barCanvas) {
      this.myChart = new Chart(this.barCanvas.nativeElement, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }


  }*/
}

// import { Component, OnInit ,AfterViewInit} from '@angular/core';
//  import { Chart } from 'chart.js';
// // # import * as Chart from 'chart.js'
// @Component({
//   selector: 'app-my-chart-one',
//   templateUrl: './my-chart-one.component.html',
//   styleUrls: ['./my-chart-one.component.less']
// })
// export class MyChartOneComponent implements OnInit , AfterViewInit{
//   public canvas:any;
//   lineChart:any;
//   public ctx:any;
//   constructor() { }
//
//   ngOnInit():void {
//     console.log("ghjk");
//     //this.createGraph('myChart');
//   }
//   ngAfterViewInit(){
//     this.createGraph('myChart');
//   }
// //
// //     this.lineChart = new Chart('myChart', {
// //     type: 'bar',
// //     data: {
// //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
// //         datasets: [{
// //             label: '# of Votes',
// //             data: [12, 19, 3, 5, 2, 3],
// //             backgroundColor: [
// //                 'rgba(255, 99, 132, 0.2)',
// //                 'rgba(54, 162, 235, 0.2)',
// //                 'rgba(255, 206, 86, 0.2)',
// //                 'rgba(75, 192, 192, 0.2)',
// //                 'rgba(153, 102, 255, 0.2)',
// //                 'rgba(255, 159, 64, 0.2)'
// //             ],
// //             borderColor: [
// //                 'rgba(255, 99, 132, 1)',
// //                 'rgba(54, 162, 235, 1)',
// //                 'rgba(255, 206, 86, 1)',
// //                 'rgba(75, 192, 192, 1)',
// //                 'rgba(153, 102, 255, 1)',
// //                 'rgba(255, 159, 64, 1)'
// //             ],
// //             borderWidth: 1
// //         }]
// //     },
// //     options: {
// //         scales: {
// //             y: {
// //                 beginAtZero: true
// //             }
// //         }
// //     }
// // });
//     // var chart = new Chart( "myChart", {
//     //
//     //     // The type of chart we want to create
//     //     type: 'doughnut',
//     //
//     //     plugins: [
//     //       {beforeDraw: function(chart) {
//     //         var width = chart.chart.width,
//     //             height = chart.chart.height,
//     //             myChart = chart.chart.myChart;
//     //
//     //         myChart.restore();
//     //         var fontSize = (height / 150).toFixed(2);
//     //         myChart.font = fontSize + "em sans-serif";
//     //         myChart.textBaseline = "middle";
//     //         var text = "84.254 VISITS",
//     //             textX = Math.round((width - myChart.measureText(text).width)/2),
//     //             textY = height / 2;
//     //
//     //         myChart.fillText(text, textX, textY);
//     //         myChart.save();
//     //       }}
//     //     ],
//     //
//     //     // The data for our dataset
//     //     data: {
//     //         labels: ['United States', 'Russia', 'Italy', 'Germany', 'Other'],
//     //         datasets: [{
//     //             label: 'My First dataset',
//     //             backgroundColor: ['#3993bb','#65b5c2','#23649e','#2e7bad','#63daed'],
//     //             //borderColor: 'rgb(255, 99, 132)',
//     //             borderWidth:'0',
//     //             data: [24, 16, 10,30, 20]
//     //         }]
//     //     },
//     //
//     //     // Configuration options go here
//     //     options: {
//     //         // plugins:{chart2},
//     //       cutoutPercentage:60,
//     //       title: { display: true,
//     //         position: "center",
//     //         text: 'Upcoming Meetings' },
//     //
//     //       legend:{
//     //             display:false,
//     //           },
//     //             centertext: "123",
//     //             rotation:60,
//     //             animation:{
//     //             animateScale:true
//     //       }
//     //     }
//     // });
//
//   private createGraph(chartId){
//     this.canvas=document.getElementById(chartId);
//     this.ctx=this.canvas.getContext('2d');
//
//     let chart=new Chart(this.ctx,{
//       type: 'bar',
//       data: {
//           labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//           datasets: [{
//               label: '# of Votes',
//               data: [12, 19, 3, 5, 2, 3],
//               backgroundColor: [
//                   'rgba(255, 99, 132, 0.2)',
//                   'rgba(54, 162, 235, 0.2)',
//                   'rgba(255, 206, 86, 0.2)',
//                   'rgba(75, 192, 192, 0.2)',
//                   'rgba(153, 102, 255, 0.2)',
//                   'rgba(255, 159, 64, 0.2)'
//               ],
//               borderColor: [
//                   'rgba(255, 99, 132, 1)',
//                   'rgba(54, 162, 235, 1)',
//                   'rgba(255, 206, 86, 1)',
//                   'rgba(75, 192, 192, 1)',
//                   'rgba(153, 102, 255, 1)',
//                   'rgba(255, 159, 64, 1)'
//               ],
//               borderWidth: 1
//           }]
//       },
//       options: {
//           scales: {
//               y: {
//                   beginAtZero: true
//               }
//           }
//       }
//     });
//   }
// }
