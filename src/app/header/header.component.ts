import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  icons=['format_indent_decrease','person','search','date_range','notifications_none'];
  selects=[
    {select1: 'Mega',select2:'Calender',select3:'Next', select4:'Next'},
    {select1: 'New',select2:'Calender',select3:'Next', select4:'Next'},
  ];
  english=[
    {select1: 'English',select2:'German',select3:'Norwegian', select4:'French'}
  ];
  users=[
    {select1: 'Hoand.Thai',select2:'Mogen Polish',select3:'Amella Neslon', select4:'Aaron Page'}
  ];
  isCallOne:boolean=true;
  date=[
    '19/04/2021','20/04/2021','25/04/2021','01/05/2021','02/05/2021'
  ];
  call=[
    'First','Second'
  ];
  isCallTwo:boolean=true;
  isPersonIconClicked:boolean=true;
  isCalenderIconClicked:boolean=true;
  isCallIconClicked:boolean=true;
  personIconClick(){
    this.isPersonIconClicked=!this.isPersonIconClicked;
  }
  calendarIconClick(){
    this.isCalenderIconClicked=!this.isCalenderIconClicked;
    this.isCallOne=!this.isCallOne;
  }
  callIconClick(){
    this.isCallIconClicked=!this.isCallIconClicked;
    this.isCallTwo=!this.isCallTwo;
  }
  constructor() { }
  ngOnInit(): void {
  }

}
