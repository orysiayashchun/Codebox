import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-my-chart-two',
  templateUrl: './my-chart-two.component.html',
  styleUrls: ['./my-chart-two.component.less']
})
export class MyChartTwoComponent implements OnInit {
  public canvas:any;
  public ctx:any;
  public labels:any=['0', '27', '60', '75','90', '110', '123', '140','155','170','185','225','250'];
  public dataCases:number[]= [0, 1, 7, 3, 7, 5, 14,2,10,4,6,1,0];
  constructor() { }

  ngOnInit(): void {
    console.log("dfg");
    this.createChartTwo(this.labels,this.dataCases,'myChart_2');
    console.log("dfhj");
  }
  private createChartTwo(labels,dataCases,chartId){
    this.canvas=document.getElementById(chartId);
    this.ctx=this.canvas.getContext('2d');

    let chart =new Chart(this.ctx,{
      type:'line',
      data:{
        labels:this.labels,
        datasets:[{
          data:this.dataCases,
          backgroundColor:'#3993bb',
          borderColor:'',
          fill:false,
          borderWidth:2
        }]
      }

      // options:{
      //   title:{
      //     display:true,
      //     text:"First chart"
      //   },
      //   tooltips:{
      //     mode:'index',
      //     intersect:true
      //   },
      //   hover:{
      //     mode:'nearest',
      //     intersect:true
      //

    });
  }
}
