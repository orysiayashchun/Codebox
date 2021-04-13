import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  showMe:boolean=true;
  ngOnInit(): void {
  }
  toggleSidebar(){
    this.showMe=!this.showMe;
    //AppComponent.margin=0;
  }

}
