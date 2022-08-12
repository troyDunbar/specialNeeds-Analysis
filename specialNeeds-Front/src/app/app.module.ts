import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/common/nav/nav.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBubbleComponent } from './components/pages/form/progress-bubble/progress-bubble.component';
import { PageOneComponent } from './components/pages/form/page-one/page-one.component';
import { PageTwoComponent } from './components/pages/form/page-two/page-two.component';
import { PageThreeComponent } from './components/pages/form/page-three/page-three.component';
import { PageFourComponent } from './components/pages/form/page-four/page-four.component';
import { InputComponent } from './components/common/input/input.component';
import { FormsModule } from '@angular/forms';
import { RadioComponent } from './components/common/radio/radio.component';
import { PieChartComponent } from './components/pages/dashboard/pie-chart/pie-chart.component';
import { LineGraphComponent } from './components/pages/dashboard/line-graph/line-graph.component';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import { DataOutputComponent } from './components/pages/dashboard/data-output/data-output.component';

@NgModule({
  declarations: [AppComponent, NavComponent, FooterComponent, RoutingComponent, ProgressBubbleComponent, PageOneComponent, PageTwoComponent, PageThreeComponent, PageFourComponent, InputComponent, RadioComponent, PieChartComponent, LineGraphComponent, DataOutputComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([]),
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
