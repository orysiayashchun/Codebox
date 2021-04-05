import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.less']
})
export class ButtonsComponent implements OnInit {

  constructor() { }
  buttons=['Week','Month','Year']
  ngOnInit(): void {
  }

}
