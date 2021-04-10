import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SelectComponent } from './header/select/select.component';
import { Sidebar2Component } from './sidebar2/sidebar2.component';
import { SamplePageOneComponent } from './sample-page-one/sample-page-one.component';
import { SamplePageTwoComponent } from './sample-page-two/sample-page-two.component';
import { SamplePageThreeComponent } from './sample-page-three/sample-page-three.component';
import { SamplePageFourComponent } from './sample-page-four/sample-page-four.component';
import { SamplePageFiveComponent } from './sample-page-five/sample-page-five.component';
import { UserComponent } from './sidebar2/user/user.component';
import { ButtonComponent } from './sidebar2/button/button.component';
import { TodoComponent } from './sidebar2/todo/todo.component';
import { MembersComponent } from './sample-page-one/members/members.component';
import { ButtonsComponent } from './sample-page-one/buttons/buttons.component';
import { MyChartOneComponent } from './sample-page-one/my-chart-one/my-chart-one.component';
import { StatisticsComponent } from './sample-page-one/statistics/statistics.component';
import { ProgressComponent } from './sample-page-one/progress/progress.component';
import { UserRowComponent } from './sample-page-one/user-row/user-row.component';
import { MyChartTwoComponent } from './sample-page-one/my-chart-two/my-chart-two.component';
import { MenuComponent } from './menu/menu.component';
import { SamplePageSixComponent } from './sample-page-six/sample-page-six.component';
import { SamplePageSevenComponent } from './sample-page-seven/sample-page-seven.component';
import { SamplePageEightComponent } from './sample-page-eight/sample-page-eight.component';
import { SamplePageNineComponent } from './sample-page-nine/sample-page-nine.component';
import { SamplePageTenComponent } from './sample-page-ten/sample-page-ten.component';
import { SamplePageElevenComponent } from './sample-page-eleven/sample-page-eleven.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    Sidebar2Component,
    SamplePageOneComponent,
    SamplePageTwoComponent,
    SamplePageThreeComponent,
    SamplePageFourComponent,
    SamplePageFiveComponent,
    SelectComponent,
    UserComponent,
    ButtonComponent,
    TodoComponent,
    MembersComponent,
    ButtonsComponent,
    MyChartOneComponent,
    StatisticsComponent,
    ProgressComponent,
    UserRowComponent,
    MyChartTwoComponent,
    MenuComponent,
    SamplePageSixComponent,
    SamplePageSevenComponent,
    SamplePageEightComponent,
    SamplePageNineComponent,
    SamplePageTenComponent,
    SamplePageElevenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
