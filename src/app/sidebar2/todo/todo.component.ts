import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit {
  @Input() toDo;
  constructor() { }
  isChecked:boolean=true;
  numberOfChecked=0
  AddNumberOfChecked(){
   this.numberOfChecked+=1;
   console.log(this.numberOfChecked);
  }
  ngOnInit(): void {
  }

}
