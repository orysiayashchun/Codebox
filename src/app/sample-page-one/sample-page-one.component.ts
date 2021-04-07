import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
@Component({
  selector: 'app-sample-page-one',
  templateUrl: './sample-page-one.component.html',
  styleUrls: ['./sample-page-one.component.less']
})
export class SamplePageOneComponent implements OnInit {
  members=[
    {photo:'members_1.png',state:'#39b54a',name:'Amelia Nelson',prof:'UI Graphic'},
    {photo:'members_2.png',state:'#39b54a',name:'Alyssa Molligan',prof:'Art director, Movie Cut'},
    {photo:'members_3.png',state:'#39b54a',name:'Kaitlyn Eddington',prof:'Writter, Mag Editor'},
    {photo:'members_4.png',state:'#39b54a',name:'Aaron Page',prof:'Designer, Blogger'},
    {photo:'members_5.png',state:'#a9a9a9',name:'Erin Macey',prof:'Writter, Mag Editor'}
  ];
  tasks_photo=[
    'tasks_1.png','tasks_2.png','tasks_3.png','tasks_4.png','tasks_5.png'
  ];
  tasks_icons=[
    {icon:'add',color:'#88c057'},
    {icon:'done',color:'#9777a8'},
    {icon:'close',color:'#ed7161'},
    {icon:'message',color:'#48a0dc'}
  ];
  activity_photo=[
    'activity_1.png','activity_2.png','activity_3.png','activity_4.png'
  ];
  select=['Last 24 Hours','Last 48 Hours','One month ago','Three months ago']
  isClicked:boolean=true;
  countries=[
    {color:'#3993bb',name:'United States'},
    {color:'#65b5c2',name:'Russia'},
    {color:'#2e7bad',name:'Italy'},
    {color:'#23649e',name:'Germany'},
    {color:'#63daed',name:'Other'}
  ];
  progres=[
    {color:'#90abe3',width:'60%',text:'Consulting'},
    {color:'#8db987',width:'40%',text:'Online tutorials'},
    {color:'#dcc2f1',width:'30%',text:'EDU management'}
  ];
  toggleCollapse(){
    this.isClicked=!this.isClicked;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
