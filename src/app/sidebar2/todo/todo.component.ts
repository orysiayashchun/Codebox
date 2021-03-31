import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less']
})
export class TodoComponent implements OnInit {
  @Input() toDo;
  constructor() { }

  ngOnInit(): void {
  }

}
