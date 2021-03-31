import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.less']
})
export class Sidebar2Component implements OnInit {
  icons=['people_alt','question_answer','settings_applications'];
  users=[
    {photo:'avar_1.svg',state:'#39b54a',name:'Hoang Thai',prof:'Designer'},
    {photo:'avar_2.png',state:'#ee2337',name:'Mogen Polish',prof:'Writter, Editor'},
    {photo:'avar_3.png',state:'#ffc700',name:'Mogen Polish',prof:'Designer, Blogger'},
    {photo:'avar_4.png',state:'#53bf61',name:'Mogen Polish',prof:'Musician'},
    {photo:'avar_5.png',state:'#d4d4d4',name:'Mogen Polish',prof:'Designer, UI'}
  ];
  toDoList=[{do:'Build an angular app'},
  {do:'Creating component page'},
  {do:'Design One page theme'},
  {do:'Build a js based app'},
  {do:'Responsive design for Smartphone'}];
  ngOnInit(): void {
  }

}
