import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { FormComponent } from './components/pages/form/form.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { LoginComponent } from './components/pages/login/login.component';

const routes: Routes = [
  { path: '',   redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'form', component: FormComponent,
    // children:[
    //   {path: '', component: PageOneComponent, outlet: 'page-route'},
    //   {path: '', component: PageTwoComponent, outlet: 'page-route'},
    // ]
  },
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [HomepageComponent, LoginComponent, FormComponent, DashboardComponent]
