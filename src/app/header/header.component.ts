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
  ]
  constructor() { }
  ngOnInit(): void {
  }

}
