import { NgModule,Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';

import {HomepageComponent } from '../homepage/homepage.component';
import {LoginComponent} from '../login/login.component';
import { NavigationComponent } from '../navigation/navigation.component';
import {MidAdminComponent} from '../mid-admin/mid-admin.component';
import { MiddeoComponent} from '../middeo/middeo.component';




export const RoutesTable : Routes = [
  { path: 'homepage', component:HomepageComponent },
  { path: 'login',      component:LoginComponent},
  {path:'admin', component: MidAdminComponent },
  {path:'dataentry', component: MiddeoComponent }

]


@NgModule({
  declarations: [HomepageComponent,LoginComponent,NavigationComponent,MidAdminComponent,MiddeoComponent],
  imports: [
    CommonModule,RoutingModule,NavigationComponent,MidAdminComponent,MiddeoComponent
  ],
  exports:[HomepageComponent,LoginComponent,NavigationComponent,MidAdminComponent,MiddeoComponent]
})
export class RoutingModule { }
