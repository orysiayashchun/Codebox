import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {

  @Input() user;
  constructor() { }

  ngOnInit(): void {
  }

}
