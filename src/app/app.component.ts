import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'coursework';
  margin='150px';
  margin_button=' 170px'
  showMe:boolean=true;
  toggleSidebar(){
    this.showMe=!this.showMe;
    if (!this.showMe){
      this.margin='0px';
    }
    if(this.showMe){
      this.margin='150px';
    }
  }
}
