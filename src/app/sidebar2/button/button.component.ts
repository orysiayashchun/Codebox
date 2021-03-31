import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  isCollapsed:boolean=true;
  toggleCollapse(){
    this.isCollapsed=!this.isCollapsed;
  }
  hiddenUsers=[
    {photo:"avar_6.png",state:'#9777a8',name:'Amelia Nelson',prof:'UI Graphic'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
