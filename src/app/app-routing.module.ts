import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SamplePageOneComponent } from './sample-page-one/sample-page-one.component';
import { SamplePageTwoComponent } from './sample-page-two/sample-page-two.component';
import { SamplePageThreeComponent } from './sample-page-three/sample-page-three.component';
import { SamplePageFourComponent } from './sample-page-four/sample-page-four.component';
import { SamplePageFiveComponent } from './sample-page-five/sample-page-five.component';
import { SamplePageSixComponent } from './sample-page-six/sample-page-six.component';
import { SamplePageSevenComponent } from './sample-page-seven/sample-page-seven.component';
import { SamplePageEightComponent } from './sample-page-eight/sample-page-eight.component';
import { SamplePageNineComponent } from './sample-page-nine/sample-page-nine.component';
import { SamplePageTenComponent } from './sample-page-ten/sample-page-ten.component';
import { SamplePageElevenComponent } from './sample-page-eleven/sample-page-eleven.component';

const routes: Routes = [
    {path: '', component:SamplePageOneComponent},
    {path:'dashboard', component:SamplePageOneComponent},
    {path:'mailbox', component:SamplePageTwoComponent},
    {path:'calendar', component:SamplePageThreeComponent},
    {path:'pages', component:SamplePageFourComponent},
    {path:'apps', component:SamplePageFiveComponent},
    {path:'layouts',component:SamplePageSixComponent},
    {path:'elements',component: SamplePageSevenComponent},
    {path:'forms',component:SamplePageEightComponent},
    {path:'tables',component:SamplePageNineComponent},
    {path:'chart',component:SamplePageTenComponent},
    {path:'maps',component:SamplePageElevenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
