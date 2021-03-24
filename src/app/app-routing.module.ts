import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SamplePageOneComponent } from './sample-page-one/sample-page-one.component';
import { SamplePageTwoComponent } from './sample-page-two/sample-page-two.component';
import { SamplePageThreeComponent } from './sample-page-three/sample-page-three.component';
import { SamplePageFourComponent } from './sample-page-four/sample-page-four.component';
import { SamplePageFiveComponent } from './sample-page-five/sample-page-five.component';


const routes: Routes = [
    {path: '', component:SidebarComponent, children:[
    {path:'dashboard', component:SamplePageOneComponent},
    {path:'mailbox', component:SamplePageTwoComponent},
    {path:'calendar', component:SamplePageThreeComponent},
    {path:'pages', component:SamplePageFourComponent},
    {path:'apps', component:SamplePageFiveComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
