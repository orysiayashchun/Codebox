import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  icons=['format_indent_decrease','person','search','date_range','notifications_none'];
/*  menu__lists={
    (name:'Mega')
    (name:'New')
    (name:'English')
    (name:'Hoand.Trai')
  };*/
  constructor() { }
  ngOnInit(): void {
  }

}
