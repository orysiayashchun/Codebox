import { Component, OnInit,Input,} from '@angular/core';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.less']
})
export class Sidebar2Component implements OnInit {
  icons=[
    {name:'people_alt',isClickOnIcon:true},
    {name:'question_answer',isClickOnIcon:false},
    {name:'settings_applications',isClickOnIcon:false}
];
  users=[
    {photo:'avar_1.png',state:'#39b54a',name:'Hoang Thai',prof:'Designer'},
    {photo:'avar_2.png',state:'#ee2337',name:'Mogen Polish',prof:'Writter, Editor'},
    {photo:'avar_3.png',state:'#ffc700',name:'Mogen Polish',prof:'Designer, Blogger'},
    {photo:'avar_4.png',state:'#53bf61',name:'Mogen Polish',prof:'Musician'},
    {photo:'avar_5.png',state:'#d4d4d4',name:'Mogen Polish',prof:'Designer, UI'}
  ];
  toDoList=[{do:'Build an angular app',check:'1'},
  {do:'Creating component page',check:'2'},
  {do:'Design One page theme',check:'3'},
  {do:'Build a js based app',check:'4'},
  {do:'Responsive design for',check:'5'}];
  //@ViewChild(TodoComponent)
  //numberOfChecked=0: TodoComponent;
  isAdded:boolean=true;
  numberOfChecked=0;
  currentVal="";
  getVal(val){
    console.warn(val);
    this.currentVal=val;
    this.isAdded=!this.isAdded;
  }
  clickOnIcon(item){
    this.icons.forEach(element => {
      if(element.name!=item.name)
        element.isClickOnIcon=false;
        else{
          element.isClickOnIcon=true;
        }
    });
    }
    countOfChanged(){
      this.numberOfChecked++;
      console.log(this.numberOfChecked);

    }
  ngOnInit(): void {
  }

}
