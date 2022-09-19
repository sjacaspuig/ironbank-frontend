import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { HomeGuard } from '../guards/home.guard';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
        canActivate: [HomeGuard]
      },
      { 
        path: 'dashboard-user',
        loadChildren: () => import('./dashboard-user/dashboard-user.module').then(m => m.DashboardUserModule),
        canActivate: [AuthGuard],
        data: {requiredRoles: ['user']}
      },
      { 
        path: 'dashboard-admin',
        loadChildren: () => import('./dashboard-admin/dashboard-admin.module').then(m => m.DashboardAdminModule),
        canActivate: [AuthGuard],
        data: {requiredRoles: ['admin']}
      },
      { 
        path: 'dashboard-super-admin',
        loadChildren: () => import('./dashboard-super-admin/dashboard-super-admin.module').then(m => m.DashboardSuperAdminModule),
        canActivate: [AuthGuard],
        data: {requiredRoles: ['super-admin']}
      },
      { path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
