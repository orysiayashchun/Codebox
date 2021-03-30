import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.less']
})
export class Sidebar2Component implements OnInit {
  icons=['people_alt','question_answer','settings_applications'];
  users=[
    {photo:"avar_1",state:'#39b54a',name:'Hoang Thai',prof:'Designer'},
    {photo:"avar_2",state:'#ee2337',name:'Mogen Polish',prof:'Writter, Editor'},
    {photo:"avar_3",state:'#ffc700',name:'Mogen Polish',prof:'Designer, Blogger'},
    {photo:"avar_4",state:'#53bf61',name:'Mogen Polish',prof:'Musician'},
    {photo:"avar_5",state:'#d4d4d4',name:'Mogen Polish',prof:'Designer, UI'}
  ];
  s="/assets/img/";
  constructor() { }

  ngOnInit(): void {
  }

}
