import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

const ROUTES: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'task',
        loadChildren: () =>
          import('../task/task.module').then((m) => m.TaskModule),
      },
      //   {
      //     path: 'auth',
      //     loadChildren: () =>
      //       import('../auth/auth.module').then((m) => m.AuthModule),
      //   },
      //   {
      //     path: 'cart',
      //     loadChildren: () =>
      //       import('../cart/cart.module').then((m) => m.CartModule),
      //   },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
  declarations: [NavbarComponent, HomeComponent],
})
export class LayoutModule {}
