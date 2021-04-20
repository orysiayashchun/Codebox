import { Component, OnInit } from '@angular/core';
// import { Chart } from 'node_modules/chart.js';
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
  select=['Last 24 Hours','Last 48 Hours','One month ago','Three months ago'];
  select_2=['Bulk Action','Bulk Action','Bulk Action','Bulk Action'];
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
  users=[
    {background:'#f9f9f9',check:'20',photo:'table_1.png',
    name:'Shaunta Pollan',task:'Sketch out new idea for promote Great App',
    date:'Jul 25, 2015',status:'Done',color:'#0072bc'},
    {background:'#fff',check:'21',photo:'table_2.png',
    name:'Ronald Reck',task:'Create Design based on promotional page for Getz Pay',
    date:'Jul 25, 2015',status:'Ongoing',color:'#ffc700'},
    {background:'#f9f9f9',check:'22',photo:'table_3.png',
    name:'Kristine Spindler',task:'Design responsive template for Online Shop',
    date:'Jul 25, 2015',status:'In Review',color:'#8bc34a'},
    {background:'#fff',check:'23',photo:'table_4.png',
    name:'Randolph Seckman',task:'Side bar enhancement for Merchant Panel ',
    date:'Jul 25, 2015',status:'Pending',color:'#a767dd'},
    {background:'#f9f9f9',check:'24',photo:'table_5.png',
    name:'Bailey Angell',task:'Plan for team building activity QII ',
    date:'Jul 25, 2015',status:'Removed',color:'#e92020'}
  ];
  page_number=0;
  toggleCollapse(){
    this.isClicked=!this.isClicked;
  }
  status=[
    {text:'Removed',color:'#e92020'},
    {text:'Pending',color:'#a767dd'},
    {text:'In Review',color:'#8bc34a'},
    {text:'Ongoing',color:'##ffc700'},
    {text:'Done',color:'#0072bc'}
  ];
  editStatus(user){
    user.status=this.status[0].text;
    user.color=this.status[0].color;
  };
  isIconClick:boolean=true;
  iconClick(){
    this.isIconClick=!this.isIconClick;
  };
  isSettingClick:boolean=true;
  iconClickSetting(){
    this.isSettingClick=!this.isSettingClick;
  };
  
  constructor() { }

  ngOnInit(): void {

  }

}
