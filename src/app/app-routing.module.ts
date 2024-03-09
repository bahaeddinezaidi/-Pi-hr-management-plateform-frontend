import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { FrontComponent } from './layouts/front/front.component';
import { AuthGuard } from './Cors/Guards/auth.guard';

const routes: Routes = [
  {path:'admin', component:AdminLayoutComponent,canActivate:[AuthGuard],children:[
    {path:'',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path:'dashboard',loadChildren:()=>import('./views/admin/dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path:'allemployee',loadChildren:()=>import('./views/admin/employee/employee.module').then(m => m.EmployeeModule)},
    {path:'projects',loadChildren:()=>import('./views/admin/projects/projects.module').then(m => m.ProjectsModule)},
    {path:'leaveadmin',loadChildren:()=>import('./views/admin/leave-admin/leave-admin.module').then(m => m.LeaveAdminModule)},
    {path:'holidays',loadChildren:()=>import('./views/admin/holidays/holidays.module').then(m => m.HolidaysModule)},
    {path:'createacount',loadChildren:()=>import('./views/admin/create-acount/create-acount.module').then(m => m.CreateAcountModule)},
    {path:'allacounts',loadChildren:()=>import('./views/admin/allacounts/allacounts.module').then(m => m.AllacountsModule)},
  ]
},
{path:'',component:FrontComponent,children:[
  {path:'',loadChildren:()=>import('./views/front/home/home.module').then(m=>m.HomeModule)}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
