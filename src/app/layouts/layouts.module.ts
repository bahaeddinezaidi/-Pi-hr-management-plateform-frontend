import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from '../views/admin/dashboard/dashboard-routing.module';
import { FrontComponent } from './front/front.component';
import { HomeRoutingModule } from '../views/front/home/home-routing.module';
import { LeaveAdminRoutingModule } from '../views/admin/leave-admin/leave-admin-routing.module';
import { EmployeeRoutingModule } from '../views/admin/employee/employee-routing.module';
import { CreateAcountModule } from '../views/admin/create-acount/create-acount.module';
import { FormsModule } from '@angular/forms';
import { CreateAcountRoutingModule } from '../views/admin/create-acount/create-acount-routing.module';



@NgModule({
  declarations: [
    AdminLayoutComponent,
    FrontComponent
  ],
  imports: [
    CommonModule,RouterModule,DashboardRoutingModule,HomeRoutingModule,CreateAcountRoutingModule,FormsModule,RouterModule
  ]
})
export class LayoutsModule { }
