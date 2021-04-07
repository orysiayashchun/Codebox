import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.less']
})
export class ProgressComponent implements OnInit {
  @Input() progres;
  constructor() { }

  ngOnInit(): void {
  }

}
