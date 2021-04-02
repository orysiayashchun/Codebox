import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.less']
})
export class MembersComponent implements OnInit {

  @Input() member;
  constructor() { }

  ngOnInit(): void {
  }

}
