import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user-row',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.less']
})
export class UserRowComponent implements OnInit {

  constructor() { }
  @Input() user;
  ngOnInit(): void {
  }

}
