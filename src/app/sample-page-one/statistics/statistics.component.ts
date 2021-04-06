import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.less']
})
export class StatisticsComponent implements OnInit {

  constructor() { }
  statistics=[
    {count:'3,438',str:'Orders'},
    {count:'10,232',str:'Sellings'},
    {count:'21,550',str:'Items'},
    {count:'5,118',str:'Customers'}
  ];
  ngOnInit(): void {
  }

}
